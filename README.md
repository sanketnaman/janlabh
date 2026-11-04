# JanLabh (जनलाभ) – Government Schemes & Citizen Benefits

> **JanLabh** is an independent, citizen-centric bilingual platform designed to simplify access to Indian Central and State government welfare schemes, scholarships, financial benefits, and citizen empowerment programs.

---

## 🌟 Overview

Navigating government welfare schemes can be overwhelming due to complex eligibility rules, fragmented official portals, and language barriers. **JanLabh** bridges this gap by offering a clean, user-friendly, and accessible bilingual (Hindi & English) interface that helps every citizen find, understand, and apply for schemes they are eligible for.

---

## ✨ Key Features

- **🏛️ Central & State Schemes Directory**: Comprehensive coverage of major national initiatives (PM-KISAN, Ayushman Bharat, PMAY, Ladli Behna, etc.) as well as state-specific welfare programs.
- **🎯 Smart Scheme Finder**: An intuitive multi-step wizard that asks basic demographic questions (age, gender, state, occupation, income) and recommends the most relevant schemes.
- **✅ Instant Eligibility Checker**: Rule-based eligibility engine that validates qualifications against specific schemes, providing clear breakdowns of requirements and required documents.
- **🌐 Fully Bilingual (Hindi & English)**: Seamless one-click language toggle across the entire application to ensure accessibility for both rural and urban citizens.
- **🔍 Fast Fuzzy Search**: Instant, typo-tolerant search powered by Fuse.js across scheme names, ministries, categories, and tags.
- **📂 Categorized Hubs**: Browse schemes curated by target demographic:
  - 🚜 Farmers & Agriculture
  - 👩‍👧 Women Empowerment
  - 🎓 Students & Higher Education
  - 🏆 Scholarships (Pre & Post Matric)
  - 🏥 Healthcare & Cashless Treatment
  - 🏠 Housing & Sanitation
  - 👴 Senior Citizens & Pension
  - 💼 Employment & MSME Livelihoods
- **🗺️ State-Wise Portals**: Filter programs tailored to specific states including Uttar Pradesh, Bihar, Madhya Pradesh, Rajasthan, Maharashtra, and more.
- **📢 Updates & Announcements**: Real-time notifications and bulletin updates regarding installment dates, registration deadlines, and policy changes.
- **📄 Verified Documents & Official Links**: Clear checklists of required documents (Aadhaar, DBT accounts, income certificates) and direct links to authentic government portals (`.gov.in` / `.nic.in`) to prevent fraud.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Search Engine**: [Fuse.js](https://fusejs.io/)
- **Animations**: [Motion](https://motion.dev/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) or [Bun](https://bun.sh/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sanketnaman/janlabh.git
   cd janlabh
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open in browser:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📁 Project Structure

```text
├── app/                  # Next.js App Router (pages, layout, globals.css)
├── components/           # Reusable UI components
│   ├── Header.tsx        # Navigation header with bilingual & dark mode toggle
│   ├── HeroSection.tsx   # Banner and quick action triggers
│   ├── SchemeCard.tsx    # Scheme preview cards
│   ├── SchemeFinder.tsx  # Multi-step recommendation wizard
│   ├── SchemeDetailModal.tsx # Full scheme breakdown and official application links
│   ├── SchemeEligibilityChecker.tsx # Interactive criteria checker
│   ├── SearchModal.tsx   # Fast search modal powered by Fuse.js
│   ├── StateHubModal.tsx # State-wise exploration modal
│   ├── CategoryHubModal.tsx # Category-wise exploration modal
│   └── Footer.tsx        # Platform disclaimer and navigation links
├── data/                 # Schemas, categories, states, and updates data
│   ├── categories.ts     # Category metadata and state listings
│   ├── eligibilityRules.ts # Structured validation criteria for schemes
│   ├── schemes.ts        # Database of central and state government schemes
│   └── updates.ts        # Scheme updates, news, and deadlines
├── lib/                  # Helper utilities and engines
│   ├── eligibilityEngine.ts # Rule evaluation logic
│   ├── schemeFinderEngine.ts # Scheme matching algorithms
│   └── search.ts         # Fuse.js search index configuration
├── types/                # TypeScript interfaces and type definitions
└── public/               # Static assets and icons
```

---

## ⚖️ Disclaimer

**JanLabh** is an independent informational and citizen-guidance portal. It is **not** an official government portal and is **not** affiliated with or endorsed by the Government of India or any State Government. All scheme names, logos, and guidelines are the property of their respective ministries/departments and are used strictly for informational purposes. Users are always directed to official government websites (`.gov.in` / `.nic.in`) to submit official applications.

---

## 📄 License

This project is licensed under the MIT License.
