import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// In-memory rate limiting map: IP -> { count, resetAt }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up old entries periodically to avoid memory leaks
function cleanupRateLimitMap() {
  if (rateLimitMap.size > 1000) {
    const now = Date.now();
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    cleanupRateLimitMap();

    // 1. Rate Limiting Check
    const ip =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      'unknown-ip';

    const now = Date.now();
    const rateInfo = rateLimitMap.get(ip);

    if (rateInfo && now < rateInfo.resetAt) {
      if (rateInfo.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          {
            error: 'Too many requests',
            message: 'You have submitted several inquiries recently. Please wait a few minutes before trying again.',
          },
          { status: 429 }
        );
      }
      rateInfo.count += 1;
    } else {
      rateLimitMap.set(ip, {
        count: 1,
        resetAt: now + RATE_LIMIT_WINDOW_MS,
      });
    }

    // 2. Parse Body
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid payload', message: 'Request body must be a valid JSON object.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message, _hp } = body;

    // 3. Honeypot Check (Spam Bot Protection)
    if (_hp && typeof _hp === 'string' && _hp.trim().length > 0) {
      // Silently discard spam without throwing an error
      return NextResponse.json({
        success: true,
        message: 'Your message has been received. We reply within 2–3 working days.',
      });
    }

    // 4. Server-side Validation
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedSubject = typeof subject === 'string' ? subject.trim() : 'JanLabh Inquiry';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { error: 'Validation error', message: 'Please provide a valid name (2 to 100 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || trimmedEmail.length > 100 || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Validation error', message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10 || trimmedMessage.length > 3000) {
      return NextResponse.json(
        { error: 'Validation error', message: 'Message must be between 10 and 3,000 characters.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // 5. Audit Logging (Strictly no sensitive Aadhaar / financial details stored)
    console.log(`[JanLabh Contact Inquiry] ${timestamp} | From: ${trimmedName} <${trimmedEmail}> | Subject: ${trimmedSubject} | Length: ${trimmedMessage.length} chars`);

    // 6. Forward via Resend if RESEND_API_KEY is configured in the environment
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'JanLabh Contact <contact@janlabh.in>',
            to: ['contact@janlabh.in'],
            reply_to: trimmedEmail,
            subject: `[JanLabh Inquiry] ${trimmedSubject} - ${trimmedName}`,
            text: `JanLabh Citizen / User Inquiry\n=================================\nDate: ${timestamp}\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}\n`,
          }),
        });

        if (!resendResponse.ok) {
          const resendErr = await resendResponse.text();
          console.error('[Resend Error]', resendErr);
        }
      } catch (mailError) {
        console.error('[Mail Delivery Exception]', mailError);
      }
    }

    // 7. Successful Response
    return NextResponse.json({
      success: true,
      message: 'Your message has been received. We reply within 2–3 working days.',
    });
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Unable to process your request at this moment. Please email contact@janlabh.in directly.',
      },
      { status: 500 }
    );
  }
}
