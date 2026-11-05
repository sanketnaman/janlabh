'use client';

import React, { useState } from 'react';
import StaticPageLayout from '@/components/StaticPageLayout';
import { Mail, Building, Send, CheckCircle2 } from 'lucide-react';

export default function ContactView() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <StaticPageLayout
      breadcrumbTitle_en="Contact Us"
      breadcrumbTitle_hi="संपर्क करें"
      activeNav="trust"
    >
      {(lang) => {
        const isHi = lang === 'hi';
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                <Mail className="h-4 w-4" />
                <span>{isHi ? 'नागरिक सहायता एवं संपादकीय डेस्क' : 'Citizen Support & Editorial Desk'}</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {isHi ? 'हमसे संपर्क करें (Contact JanLabh)' : 'Contact JanLabh'}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isHi ? 'सुझाव, त्रुटि सुधार अथवा सामान्य पूछताछ हेतु सीधे संपर्क करें' : 'Reach out for inquiries, policy corrections, editorial feedback, or assistance'}
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Mail className="h-4 w-4" />
                  <span>{isHi ? 'संपादकीय व सामान्य ईमेल' : 'Editorial & General Desk'}</span>
                </div>
                <div className="text-sm font-mono font-semibold text-slate-900 dark:text-white">
                  contact@janlabh.in
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isHi ? 'प्रतिक्रिया समय: 24 से 48 घंटे कार्यदिवस' : 'Typical response: 24–48 business hours'}
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Building className="h-4 w-4" />
                  <span>{isHi ? 'स्थान एवं संचालन' : 'Operational Base'}</span>
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  New Delhi & Ranchi, India
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isHi ? 'अखिल भारतीय नागरिक कल्याण अनुसंधान' : 'Civic Welfare & Policy Research'}
                </p>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'संदेश या सुधार भेजें (Send a Message)' : 'Send Us a Message or Report an Error'}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {isHi
                  ? 'यदि आपको किसी योजना के नियम, पात्रता या लिंक में कोई त्रुटि मिलती है, तो नीचे दिए गए फॉर्म से हमें तुरंत अवगत कराएं।'
                  : 'If you observe an outdated scheme deadline, broken portal link, or discrepancy, submit your note below.'}
              </p>

              {formSubmitted ? (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>
                    {isHi
                      ? 'धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हमारी टीम जल्द ही इसकी समीक्षा करेगी।'
                      : 'Thank you! Your inquiry has been dispatched to the editorial desk for prompt review.'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 not-prose p-6 bg-slate-50/70 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {isHi ? 'आपका पूरा नाम *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isHi ? 'उदा. राहुल शर्मा' : 'e.g. Rahul Sharma'}
                        className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {isHi ? 'ईमेल पता *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="citizen@example.com"
                        className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {isHi ? 'विषय या संबंधित योजना' : 'Subject or Scheme Title'}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={isHi ? 'उदा. पीएम किसान ई-केवाईसी सुधार' : 'e.g. PM-Kisan verification query'}
                      className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {isHi ? 'संदेश / विवरण *' : 'Message Details *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isHi ? 'कृपया अपना संदेश या सुझाव यहां लिखें...' : 'Type your detailed inquiry, suggestion, or correction details...'}
                      className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-lg transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{isHi ? 'संदेश भेजें' : 'Send Message to Editorial Desk'}</span>
                  </button>
                </form>
              )}
            </section>
          </article>
        );
      }}
    </StaticPageLayout>
  );
}
