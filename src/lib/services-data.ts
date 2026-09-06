export interface ServiceDetail {
  slug: string;
  title: string;
  badge: string;
  shortDescription: string;
  heroHeadline: string;
  heroStatement: string;
  theProblemWeSolve: {
    heading: string;
    description: string;
    points: { title: string; detail: string }[];
  };
  deliverables: {
    title: string;
    description: string;
    features: string[];
  }[];
  techStack: { name: string; role: string; rationale: string }[];
  process: {
    step: string;
    title: string;
    timeframe: string;
    summary: string;
    deliverable: string;
  }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    badge: "Modern Full Stack Applications",
    shortDescription:
      "Static & dynamic Next.js applications tailored for speed. Server components, edge caching, the whole stack — built around how your users actually behave.",
    heroHeadline:
      "Websites that load in milliseconds and convert because they actually work.",
    heroStatement:
      "Most agency sites look pretty in Figma but stutter on real phones and crash under search bot crawls. We build rock-solid Next.js applications with clean TypeScript, deterministic rendering, and zero bundle bloat.",
    theProblemWeSolve: {
      heading: "The agency bloat problem",
      description:
        "Standard agencies hand you slow WordPress themes or over-engineered client-side SPAs that take 4 seconds to become interactive. By the time a customer clicks your checkout or contact button, they've already bounced.",
      points: [
        {
          title: "Brutal Page Speed",
          detail:
            "Every 100ms delay costs conversion revenue. We enforce strict bundle budgets, aggressive edge caching, and streaming HTML to keep your Time to Interactive under 1.2 seconds.",
        },
        {
          title: "Clean, Maintainable Codebases",
          detail:
            "No spaghetti code or mystery plugins. You receive a structured repository with strict ESLint, Prettier, and typed data models that any senior engineer can inherit without crying.",
        },
        {
          title: "Search Engine First Architecture",
          detail:
            "Semantic HTML5, automated OpenGraph generation, structured JSON-LD schemas, and dynamic XML sitemaps built directly into the server routing layer.",
        },
      ],
    },
    deliverables: [
      {
        title: "Modern Next.js 14/15 Architecture",
        description:
          "Leveraging React Server Components, server actions, and route handlers for snappy responses without heavy client-side JavaScript payloads.",
        features: [
          "Hybrid static & dynamic edge rendering",
          "Optimized asset pipelines & automatic WebP/AVIF images",
          "Predictive prefetching for instant page transitions",
        ],
      },
      {
        title: "Bespoke Design Systems & Tailwind CSS",
        description:
          "Tailored token-based styling matching your exact brand identity, built with accessibility and dark/light mode consistency.",
        features: [
          "Reusable Radix UI accessible primitives",
          "Micro-interactions powered by Framer Motion",
          "Zero layout shift (CLS < 0.05 guaranteed)",
        ],
      },
      {
        title: "API & Headless CMS Integration",
        description:
          "Connect seamlessly with your preferred data sources, payment gateways, or headless CMS platforms.",
        features: [
          "Type-safe schema validation with Zod",
          "Stripe checkout, billing portals & webhook receivers",
          "Sanity, Contentful, or Supabase backend integrations",
        ],
      },
      {
        title: "Enterprise Deployment & Observability",
        description:
          "Automated continuous integration and deployment on Vercel or AWS, backed by real-user performance monitoring.",
        features: [
          "Vercel Edge & Cloudflare DNS routing",
          "Sentry error monitoring and performance tracing",
          "Automated Lighthouse CI quality checks in pull requests",
        ],
      },
    ],
    techStack: [
      {
        name: "Next.js (App Router)",
        role: "Core Framework",
        rationale:
          "Server components eliminate client bundle weight while edge caching delivers global sub-50ms TTFB.",
      },
      {
        name: "TypeScript",
        role: "Type Safety",
        rationale:
          "Catches runtime crashes during development and ensures your team can modify code with complete confidence.",
      },
      {
        name: "Tailwind CSS",
        role: "Styling Engine",
        rationale:
          "Utility-first compilation produces minified stylesheets smaller than 15kB, avoiding dead CSS bloat.",
      },
      {
        name: "Framer Motion",
        role: "Animation Pipeline",
        rationale:
          "Hardware-accelerated gesture physics that feel native without bogging down the main JavaScript thread.",
      },
      {
        name: "PostgreSQL / Supabase",
        role: "Data Layer",
        rationale:
          "ACID-compliant relational storage with instant row-level security and automated backups.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Technical Discovery & Schema Architecture",
        timeframe: "Week 1",
        summary:
          "We map your user flows, database models, third-party integrations, and performance targets before writing a single line of frontend code.",
        deliverable: "System architecture blueprint & interactive Figma wireframes",
      },
      {
        step: "02",
        title: "Foundational Sprints & Component Engineering",
        timeframe: "Weeks 2 — 3",
        summary:
          "Building out core responsive layouts, API hooks, state machines, and key visual sections with live staging previews.",
        deliverable: "Live staging URL with weekly review video walkthroughs",
      },
      {
        step: "03",
        title: "Refinement, Speed Audits & Cross-Browser QA",
        timeframe: "Week 4",
        summary:
          "Aggressive testing on actual mobile hardware, Safari quirks, accessibility audits, and Lighthouse 95+ score tuning.",
        deliverable: "QA audit report & completed production build",
      },
      {
        step: "04",
        title: "Domain Cutover, SEO Handshake & Knowledge Transfer",
        timeframe: "Launch Day",
        summary:
          "Zero-downtime DNS deployment, Google Search Console indexing verification, and a 1-hour team training session.",
        deliverable: "Production launch & complete Git repository ownership",
      },
    ],
    faqs: [
      {
        question: "Do you build custom designs or use ready-made templates?",
        answer:
          "100% custom. We don't touch off-the-shelf theme packs or site builders. Every layout is conceived in Figma, coded in clean TypeScript, and customized specifically around your product's audience.",
      },
      {
        question: "Will our internal marketing team be able to edit content?",
        answer:
          "Yes. We configure headless CMS backends (like Sanity, Strapi, or Contentful) where your marketing team can publish blog posts, update copy, and swap media without touching the codebase.",
      },
      {
        question: "Who owns the code once the project is finished?",
        answer:
          "You own 100% of the intellectual property, repository, assets, and infrastructure from the moment final payment clears. No vendor lock-in, no hostage code.",
      },
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    badge: "Native Android Applications",
    shortDescription:
      "Native-feeling iOS & Android builds. We care about the 60fps scroll, haptic feedback on confirm buttons, and offline resilience.",
    heroHeadline:
      "Mobile applications that feel like an extension of your user's hand.",
    heroStatement:
      "Clunky cross-platform wrappers kill app store ratings. We build high-framerate iOS and Android apps with thoughtful gesture response, local caching, and clean device integration.",
    theProblemWeSolve: {
      heading: "Why 80% of mobile apps get uninstalled in week one",
      description:
        "Users have zero patience for lagging lists, unresponsive buttons, or apps that completely fail the moment their phone loses signal on a subway.",
      points: [
        {
          title: "Fluid 60/120 FPS Rendering",
          detail:
            "We treat touch gestures as sacred. Native-thread animations, optimized list virtualization, and zero render stutters.",
        },
        {
          title: "Offline-First Data Architecture",
          detail:
            "Your app should stay functional when connectivity drops. We implement local SQLite / WatermelonDB stores with seamless cloud sync.",
        },
        {
          title: "App Store & Play Store Approval Guarantees",
          detail:
            "We navigate strict Apple Human Interface Guidelines and Google Play policies so your submissions pass review on the first attempt.",
        },
      ],
    },
    deliverables: [
      {
        title: "Cross-Platform React Native / Expo Builds",
        description:
          "A unified TypeScript codebase compiling to native iOS and Android binaries, slashing development time without sacrificing native feel.",
        features: [
          "Expo EAS cloud compilation & automated build pipelines",
          "Native modules for Bluetooth, Camera, and Biometrics",
          "Over-The-Air (OTA) hotfix updates for instant bug patches",
        ],
      },
      {
        title: "Tactile UI & Micro-Haptics",
        description:
          "Haptic feedback triggers on card swipes, toggle switches, and purchase confirmations that give users visceral physical confidence.",
        features: [
          "Platform-specific typography & safe-area handling",
          "Smooth gesture navigation & bottom sheet drawers",
          "Dynamic dark mode syncing with OS settings",
        ],
      },
      {
        title: "Push Notifications & Deep Linking",
        description:
          "Targeted notification flows and universal links that guide users straight to specific in-app content from emails and social links.",
        features: [
          "APNs & Firebase Cloud Messaging (FCM) integration",
          "Smart badge counts & rich notification media",
          "Branch.io or universal link routing setup",
        ],
      },
      {
        title: "In-App Purchases & Monetization",
        description:
          "Rock-solid subscription management and one-time unlock mechanisms with server-side receipt validation.",
        features: [
          "RevenueCat or native StoreKit 2 integration",
          "Paywall A/B testing scaffolding",
          "Grace period & subscription recovery flows",
        ],
      },
    ],
    techStack: [
      {
        name: "React Native & Expo",
        role: "Mobile Framework",
        rationale:
          "Produces true native UIKit and Android View hierarchies with unified TypeScript maintenance.",
      },
      {
        name: "Reanimated 3",
        role: "Gesture Physics",
        rationale:
          "Runs complex animations directly on the UI thread, bypassing JavaScript bridge bottlenecks.",
      },
      {
        name: "TanStack Query",
        role: "Server State & Sync",
        rationale:
          "Automatic background refetching, optimistic UI mutations, and cached network responses.",
      },
      {
        name: "RevenueCat",
        role: "In-App Subscriptions",
        rationale:
          "Eliminates server-side receipt validation headaches between Apple App Store and Google Play.",
      },
      {
        name: "PostHog Mobile",
        role: "Product Analytics",
        rationale:
          "Session replays and conversion funnels to see exactly where users drop off in your onboarding.",
      },
    ],
    process: [
      {
        step: "01",
        title: "UX Mapping & Native Prototype",
        timeframe: "Week 1",
        summary:
          "Interactive Figma prototypes tested on real device screens to validate thumb reach, navigation patterns, and onboarding friction.",
        deliverable: "Tested mobile click-through prototype & technical specification",
      },
      {
        step: "02",
        title: "Architecture & Core Features Build",
        timeframe: "Weeks 2 — 4",
        summary:
          "Setting up state management, local database schemas, authentication, and primary user value loops.",
        deliverable: "TestFlight (iOS) and Internal Track (Android) invitation builds",
      },
      {
        step: "03",
        title: "Hardware Integration & Performance Tuning",
        timeframe: "Weeks 5 — 6",
        summary:
          "Push notifications, camera permissions, haptics, battery consumption profiling, and memory leak elimination.",
        deliverable: "Feature-complete release candidates tested across multiple devices",
      },
      {
        step: "04",
        title: "App Store Submissions & Launch Ops",
        timeframe: "Week 7",
        summary:
          "App Store screenshots, privacy nutrition labels, review team notes, and live rollout coordination.",
        deliverable: "Live listings on Apple App Store & Google Play Store",
      },
    ],
    faqs: [
      {
        question: "Should we build native Swift/Kotlin or React Native?",
        answer:
          "Unless you are developing a 3D mobile game or low-level audio DSP engine, React Native gives you 98% native performance at half the maintenance cost. Companies like Shopify, Discord, and Coinbase run on this exact architecture.",
      },
      {
        question: "How do you handle App Store review rejections?",
        answer:
          "We handle the entire submission process, including metadata, demo accounts, privacy declarations, and resolution of any reviewer questions until the app is approved.",
      },
      {
        question: "Can we push small updates without waiting for Apple review?",
        answer:
          "Yes. With Expo EAS Updates, we configure Over-The-Air (OTA) channels that allow pushing JS bug fixes and copy updates directly to users' devices in minutes.",
      },
    ],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    badge: "High Conversion Digital Marketing",
    shortDescription:
      "SEO and data-driven algorithmic growth. Not the kind where we send you a PDF of vanity keyword rankings — the kind where revenue actually moves.",
    heroHeadline:
      "Growth strategies designed around real buyer intent, not empty clicks.",
    heroStatement:
      "Most marketing agencies burn ad budgets on broad audiences and deliver vanity traffic that never buys. We build algorithmic search moats and precision funnels engineered for unit economics.",
    theProblemWeSolve: {
      heading: "The vanity traffic trap",
      description:
        "Thousands of monthly visitors mean nothing if they aren't qualified decision-makers ready to swipe a card or book a discovery call with your sales team.",
      points: [
        {
          title: "Technical SEO That Actually Ranks",
          detail:
            "Fixing canonical traps, crawl budget bottlenecks, Core Web Vitals penalties, and building programmatic content engines that capture high-intent long-tail keywords.",
        },
        {
          title: "Conversion-Focused Landing Funnels",
          detail:
            "We don't send paid traffic to generic homepages. We build bespoke landing pages tested for message-market resonance and high opt-in rates.",
        },
        {
          title: "Uncompromising Attribution Models",
          detail:
            "Clear event tracking via server-side analytics, Google Tag Manager, and PostHog so you know exactly which dollar produced which customer.",
        },
      ],
    },
    deliverables: [
      {
        title: "Technical & Programmatic SEO",
        description:
          "Structural site optimization and scalable content architectures that build compounding search equity over time.",
        features: [
          "Semantic URL hierarchy & internal linking graph optimization",
          "Automated schema markup (Product, Organization, FAQ, Article)",
          "IndexNow protocol & instant search engine pinging",
        ],
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description:
          "Scientific multivariate testing and friction removal across key sign-up, demo, and checkout funnels.",
        features: [
          "Heatmap and session recording behavior analysis",
          "Form friction reduction and single-step conversion funnels",
          "Copywriting that addresses customer skepticism head-on",
        ],
      },
      {
        title: "Paid Acquisition & High-Intent Search",
        description:
          "Laser-targeted Google Search, LinkedIn Ads, or Meta retargeting campaigns built around positive customer acquisition cost (CAC).",
        features: [
          "Negative keyword sculpting to eliminate ad budget waste",
          "Server-side Conversion API (CAPI) setup for privacy-proof tracking",
          "High-converting ad creative copy and visual assets",
        ],
      },
      {
        title: "Lifecycle Email & Retention Sequences",
        description:
          "Automated onboarding and re-engagement workflows that turn first-time purchasers into repeat brand advocates.",
        features: [
          "Cart abandonment & trial expiration recovery sequences",
          "Behavioral trigger emails based on in-app events",
          "Clean sender reputation & DKIM/SPF deliverability tuning",
        ],
      },
    ],
    techStack: [
      {
        name: "Google Search Console & Ahrefs",
        role: "Organic Intelligence",
        rationale:
          "Pinpointing high-intent keyword gaps with low competitive friction and tracking real SERP movements.",
      },
      {
        name: "PostHog & Plausible",
        role: "Privacy-Friendly Analytics",
        rationale:
          "Lightweight tracking with zero cookie banner baggage, giving accurate conversion attribution without blocking ad blockers.",
      },
      {
        name: "Google Tag Manager (Server-Side)",
        role: "Event Pipeline",
        rationale:
          "Bypasses browser ad-blocking to deliver clean conversion signals back to advertising algorithms.",
      },
      {
        name: "Customer.io / Resend",
        role: "Lifecycle Messaging",
        rationale:
          "High-throughput transactional and behavioral event messaging with 99%+ inbox placement.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Funnel Audit & Unit Economics Deep Dive",
        timeframe: "Week 1",
        summary:
          "We dissect your existing traffic, bounce rates, customer acquisition costs, and analytics instrumentation to find immediate leaks.",
        deliverable: "Comprehensive growth audit & 90-day execution roadmap",
      },
      {
        step: "02",
        title: "Tracking Overhaul & Landing Page Deployment",
        timeframe: "Weeks 2 — 3",
        summary:
          "Fixing tracking discrepancies, deploying high-converting custom landing pages, and setting baseline metrics.",
        deliverable: "Calibrated analytics dashboard & live high-conversion funnels",
      },
      {
        step: "03",
        title: "Campaign Activation & Programmatic SEO Rollout",
        timeframe: "Weeks 4 — 8",
        summary:
          "Launching targeted search campaigns, publishing programmatic indexable pages, and optimizing weekly bids.",
        deliverable: "Live inbound pipeline & bi-weekly performance breakdown reports",
      },
      {
        step: "04",
        title: "Retention Loops & Continuous Optimization",
        timeframe: "Ongoing",
        summary:
          "A/B testing headlines, call-to-actions, and expanding the keyword moat into adjacent high-margin verticals.",
        deliverable: "Compounding monthly organic traffic & lower effective CAC",
      },
    ],
    faqs: [
      {
        question: "How quickly can we expect to see tangible results?",
        answer:
          "Paid search and conversion optimization improvements produce measurable changes within 7 to 14 days of launch. Organic SEO is a compounding investment that typically builds dominant SERP momentum between months 2 and 4.",
      },
      {
        question: "Do you guarantee first-page Google rankings?",
        answer:
          "Anyone who guarantees #1 rankings on Google is lying to you. What we guarantee is rigorous technical execution, high-intent targeting, and demonstrable revenue growth over vanity metrics.",
      },
      {
        question: "How do you report progress?",
        answer:
          "No 40-page confusing automated PDFs. We provide a live interactive dashboard tracking cost-per-lead, pipeline generated, and organic impressions, paired with a bi-weekly Loom video walk-through.",
      },
    ],
  },
  "social-media-handling": {
    slug: "social-media-handling",
    title: "Social Media Handling",
    badge: "Brand Presence & Modern digital leads",
    shortDescription:
      "Authentic brand presence and architecture. We build the system, not just the posts. We handle with care your business values and brand perception.",
    heroHeadline:
      "Brand presence that commands attention instead of blending into the feed.",
    heroStatement:
      "Most corporate social media is soulless filler created to check a marketing box. We craft opinionated, high-taste visual identity systems and founder-led content engines that build cultural real estate.",
    theProblemWeSolve: {
      heading: "The death of generic corporate posting",
      description:
        "Modern audiences scroll right past sanitized corporate announcements and canned stock graphics. If your company sounds like a committee, nobody listens.",
      points: [
        {
          title: "Distinct Visual Language",
          detail:
            "Custom motion graphics, editorial typography, and disciplined color palettes that make your brand immediately recognizable within 0.3 seconds of scrolling.",
        },
        {
          title: "Founder & Product Storytelling",
          detail:
            "We extract authentic behind-the-scenes narratives, technical breakthroughs, and contrarian perspectives directly from your builders.",
        },
        {
          title: "Community Capital, Not Just Follower Counts",
          detail:
            "Fostering active comment discussions, industry peer relationships, and customer advocacy that translates into inbound word-of-mouth pipeline.",
        },
      ],
    },
    deliverables: [
      {
        title: "Social Brand Identity & Visual Toolkit",
        description:
          "A comprehensive design system formatted specifically for X/Twitter, LinkedIn, Instagram, and YouTube.",
        features: [
          "Bespoke carousel templates & infographic architectures",
          "High-contrast thumbnail designs with editorial typography",
          "Figma workspace with production-ready asset libraries",
        ],
      },
      {
        title: "Short-Form Video & Motion Design",
        description:
          "Snappy product walkthroughs, kinetic typography reels, and founder clips edited with cinematic pacing.",
        features: [
          "Dynamic screen recordings with 3D device framing",
          "Subtitled audio clips with stylized animated typography",
          "Sound design & micro-haptics that elevate perceived product quality",
        ],
      },
      {
        title: "Content Strategy & Editorial Rhythm",
        description:
          "A repeatable publishing calendar balancing technical authority, customer case studies, and industry commentary.",
        features: [
          "Bi-weekly content sprints with zero last-minute scrambling",
          "Ghostwriting for founder LinkedIn & X/Twitter personal profiles",
          "Repurposing technical blog posts into multi-slide visual breakdowns",
        ],
      },
      {
        title: "Proactive Community Engagement",
        description:
          "Active participation in relevant industry conversations, engaging with key opinion leaders and prospective enterprise clients.",
        features: [
          "Daily response monitoring and customer sentiment triage",
          "Quote-tweet commentary on breaking sector news",
          "Direct message qualification and inbound lead handoff",
        ],
      },
    ],
    techStack: [
      {
        name: "Figma",
        role: "Design System",
        rationale:
          "Collaborative, componentized design libraries ensuring visual consistency across all team members.",
      },
      {
        name: "After Effects & Premiere Pro",
        role: "Motion Design",
        rationale:
          "Industry-standard 60fps rendering for crisp product demos and cinematic video sequencing.",
      },
      {
        name: "Typefully & Buffer",
        role: "Scheduling & Queueing",
        rationale:
          "Thread drafting, optimal time publishing, and detailed audience retention analytics.",
      },
      {
        name: "Notion Editorial Hub",
        role: "Content Pipeline",
        rationale:
          "Transparent kanban workflow where your team can review, edit, and approve posts with a single click.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand Voice Extraction & Aesthetic Audit",
        timeframe: "Week 1",
        summary:
          "We interview your founders, audit competitor feeds, and establish clear tone guidelines: what your brand says, and more importantly, what it never says.",
        deliverable: "Social brand playbook & custom visual design kit",
      },
      {
        step: "02",
        title: "Asset Library Creation & Content Sprint",
        timeframe: "Week 2",
        summary:
          "Designing the first 30 days of high-fidelity visual assets, carousels, and video snippets for client approval.",
        deliverable: "First month of scheduled content loaded into staging kanban",
      },
      {
        step: "03",
        title: "Channel Activation & Distribution",
        timeframe: "Weeks 3 — 6",
        summary:
          "Consistent daily publishing, active community participation, and tracking engagement quality over vanity impressions.",
        deliverable: "Live cross-platform posting rhythm & engagement logs",
      },
      {
        step: "04",
        title: "Performance Review & Format Iteration",
        timeframe: "Monthly",
        summary:
          "Analyzing top-performing post formats, doubling down on what resonated, and retiring underperforming angles.",
        deliverable: "Monthly retrospective report & updated editorial roadmap",
      },
    ],
    faqs: [
      {
        question: "How much time will our team need to commit each week?",
        answer:
          "Less than 45 minutes per week. We do a brief 30-minute sync to capture your latest company milestones, write and design all assets, and you spend 15 minutes reviewing the batch in our Notion hub.",
      },
      {
        question: "Do you use AI tools to generate social media captions?",
        answer:
          "No. Canned AI posts are instantly recognizable and erode brand trust. Every single hook, thread, and caption is written by human copywriters who understand design, engineering, and tech culture.",
      },
      {
        question: "Can you help ghostwrite for our founders on LinkedIn or X?",
        answer:
          "Yes. Founder-led distribution is often 5x to 10x more effective than company page posting. We capture your authentic perspective and turn your raw ideas into polished thought-leadership threads.",
      },
    ],
  },
};
