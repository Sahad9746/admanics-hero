export interface Service {
  slug: string;
  category: string;
  pillar: "Marketing" | "Production" | "ORM";
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  detailedContent: string;
  outcome: string;
  image?: string;
  videoUrl?: string;
  lottieUrl?: string;
  features: string[];
}

export const pillarMetadata = {
  Marketing: {
    slug: "marketing",
    title: "Digital Marketing & Growth",
    description: "Our marketing systems are engineered for infinite scale. We deploy interconnected modules that track, nurture, and convert attention into predictable revenue.",
    outcome: "Revenue Acceleration",
    image: "/images/services/marketing-v3.png"
  },
  Production: {
    slug: "production",
    title: "Production & Media",
    description: "We treat content as infrastructure. High-impact visuals meeting strategic storytelling to elevate your brand's digital authority across all channels.",
    outcome: "Brand Authority",
    image: "/images/services/production-v3.png"
  },
  ORM: {
    slug: "orm",
    title: "ORM & Reputation",
    description: "Protect your most valuable asset. Our AI-driven reputation management systems safeguard your brand image while building trust at every digital touchpoint.",
    outcome: "Trust Security",
    image: "/images/services/orm-v3.png"
  }
};

export const services: Service[] = [
  // --- Digital Marketing Pillar ---
  {
    slug: "performance-marketing",
    category: "Digital Marketing",
    pillar: "Marketing",
    title: "Performance Marketing",
    iconName: "BarChart3",
    tagline: "ROI-Focused Growth",
    description: "Data-driven advertising strategies across major platforms to drive immediate ROI.",
    detailedContent: "Our performance marketing systems are engineered for one thing: measurable growth. We combine advanced audience targeting with creative optimization to ensure every marketing dollar contributes to your bottom line. From Meta to Google Search, we manage the entire funnel to turn interest into revenue.",
    outcome: "Scalable ROI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_gjmecwii.json", // Rocket/Growth
    features: ["Cross-Platform Ad Management", "Real-Time Optimization", "Full-Funnel Tracking", "A/B Creative Testing"]
  },
  {
    slug: "analytics",
    category: "Digital Marketing",
    pillar: "Marketing",
    title: "Analytics",
    iconName: "PieChart",
    tagline: "Data Intelligence",
    description: "Deep-dive analytics to transform raw data into actionable growth insights.",
    detailedContent: "We don't just track clicks; we track behavior. Our analytics systems provide a clear window into your customer's journey, identifying bottlenecks and opportunities for optimization. We use data to drive decisions, ensuring your strategy is rooted in reality, not assumptions.",
    outcome: "Actionable Insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2600&auto=format&fit=crop",
    lottieUrl: "https://assets10.lottiefiles.com/packages/lf20_w51pcehl.json", // Data/Analytics
    features: ["Conversion Path Analysis", "User Behavior Tracking", "Custom Reporting Dashboards", "Attribution Modeling"]
  },
  {
    slug: "marketing-automation",
    category: "Digital Marketing",
    pillar: "Marketing",
    title: "Marketing Automation",
    iconName: "Zap",
    tagline: "Efficiency at Scale",
    description: "Interconnected workflows that nurture leads and automate customer relationships.",
    detailedContent: "Scale your efforts without scaling your workload. Our marketing automation systems bridge the gap between marketing and sales, ensuring no lead is left behind. We build intelligent workflows that respond to user behavior in real-time, delivering the right message at the right moment.",
    outcome: "Operational Scale",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2600&auto=format&fit=crop",
    lottieUrl: "https://assets4.lottiefiles.com/packages/lf20_l3sfdi9x.json", // Automation
    features: ["Lead Nurture Sequences", "Automated CRM Integration", "Behavioral Email Triggers", "Workflow Optimization"]
  },
  {
    slug: "content-marketing",
    category: "Digital Marketing",
    pillar: "Marketing",
    title: "Content Marketing",
    iconName: "FileText",
    tagline: "Strategic Storytelling",
    description: "Value-driven content strategies that build authority and drive long-term engagement.",
    detailedContent: "Content is the engine of digital growth. We build content ecosystems that establish your brand as a thought leader while driving organic traffic. Our strategy focuses on creating evergreen assets that continue to add value and attract prospects long after they are published.",
    outcome: "Brand Authority",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2600&auto=format&fit=crop",
    lottieUrl: "https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json", // Creative/Idea
    features: ["Content Strategy Development", "SEO-Optimized Writing", "Multi-Channel Distribution", "Engagement Tracking"]
  },
  {
    slug: "social-media-marketing",
    category: "Digital Marketing",
    pillar: "Marketing",
    title: "Social Media Marketing",
    iconName: "Share2",
    tagline: "Community Growth",
    description: "Strategic social presence designed to build community and drive brand awareness.",
    detailedContent: "Beyond just posting, we build social ecosystems. Our approach to social media marketing focuses on building authentic connections with your audience across platforms. We combine creative storytelling with data-driven distribution to grow your community and drive meaningful engagement.",
    outcome: "Active Community",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2574&auto=format&fit=crop",
    lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_5tl1xxnz.json", // Social Network
    features: ["Social Strategy & Audits", "Paid Social Expansion", "Community Management", "Viral Content Engineering"]
  },
  {
    slug: "seo",
    category: "Digital Marketing",
    pillar: "Marketing",
    title: "SEO",
    iconName: "Search",
    tagline: "Organic Dominance",
    description: "Technical and creative SEO strategies to dominate search results and attract evergreen traffic.",
    detailedContent: "Establish permanent digital real estate. Our SEO systems focus on both technical excellence and authority building to ensure your brand stays at the top of search rankings. We build a foundation of organic visibility that provides a continuous stream of high-quality, intent-driven traffic.",
    outcome: "Organic Authority",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2531&auto=format&fit=crop",
    lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_qmfs6c3i.json", // SEO Optimization
    features: ["Technical SEO Audits", "Authority Link Building", "Keyword Intent Strategy", "On-Page Optimization"]
  },

  // --- Production Pillar ---
  {
    slug: "video-production",
    category: "Production",
    pillar: "Production",
    title: "High-Impact Video Production",
    iconName: "Video",
    tagline: "Visual Excellence",
    description: "Studio-quality video content designed for high-conversion ads and brand storytelling.",
    detailedContent: "In a visual-first world, quality is your best differentiator. Our video production team delivers high-impact assets that capture attention in milliseconds. From 4K cinematography to professional color grading, we ensure your brand's visual identity is premium and persuasive.",
    outcome: "Premium Positioning",
    image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2600&auto=format&fit=crop",
    videoUrl: "https://cdn.coverr.co/videos/coverr-filmmaking-set-5312/1080p.mp4",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_khzniaya.json", // Film/Video
    features: ["Cinematic Ad Production", "Professional Color Grading", "Green Screen & Studio Shoots", "Multi-Platform Optimization"]
  },
  {
    slug: "creative-strategy",
    category: "Production",
    pillar: "Production",
    title: "Creative Strategy & Pre-Production",
    iconName: "Lightbulb",
    tagline: "Architectural Design",
    description: "Comprehensive planning and creative mapping to ensure production success.",
    detailedContent: "Success is built in the pre-production phase. We bridge the gap between business goals and creative execution. Our strategy team develops concepts, storyboards, and scripts that are engineered to resonate with your audience and drive specific project outcomes.",
    outcome: "Strategic Clarity",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=2574&auto=format&fit=crop",
    videoUrl: "https://cdn.coverr.co/videos/coverr-hands-typing-on-a-keyboard-4632/1080p.mp4",
    lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_touohxv0.json", // Trophy New
    features: ["Concept Development", "Scriptwriting & Storyboarding", "Production Management", "Visual Style Scoping"]
  },
  {
    slug: "audio-digital-media",
    category: "Production",
    pillar: "Production",
    title: "Audio & Digital Media",
    iconName: "Volume2",
    tagline: "Atmospheric Sound",
    description: "Professional audio engineering and digital media assets for immersive brand experiences.",
    detailedContent: "Sound is the invisible layer of brand identity. We provide professional audio production, from immersive sound design to crystal-clear voiceovers. Combined with high-end digital media assets, we create experiences that engage the senses and reinforce brand recall.",
    outcome: "Sensory Engagement",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2574&auto=format&fit=crop",
    videoUrl: "https://cdn.coverr.co/videos/coverr-dj-playing-music-at-a-party-5318/1080p.mp4",
    lottieUrl: "https://assets1.lottiefiles.com/packages/lf20_tbrwjiv5.json", // Lesson New
    features: ["Immersive Sound Design", "Professional Voiceover", "Audio Post-Production", "Digital Asset Design"]
  },
  {
    slug: "influencer-marketing",
    category: "Production",
    pillar: "Production",
    title: "Influencer Marketing",
    iconName: "Users",
    tagline: "Authentic Influence",
    description: "Strategic influencer partnerships that amplify your brand message through trusted voices.",
    detailedContent: "Leverage the power of authentic voices to reach your target audience. We connect your brand with influencers who align with your values and resonate with your ideal customers. From micro-influencers to industry leaders, we manage the entire partnership lifecycle to ensure maximum impact and ROI.",
    outcome: "Expanded Reach",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2600&auto=format&fit=crop",
    videoUrl: "https://cdn.coverr.co/videos/coverr-woman-taking-pictures-of-food-5322/1080p.mp4",
    lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_jtbfg2nb.json", // Bell New
    features: ["Influencer Vetting & Selection", "Campaign Strategy", "Content Collaboration", "Performance Analytics"]
  },
  {
    slug: "corporate-video-production",
    category: "Production",
    pillar: "Production",
    title: "Corporate Video Production",
    iconName: "Briefcase",
    tagline: "Professional Storytelling",
    description: "High-quality corporate videos that communicate your brand values and business vision.",
    detailedContent: "Transform your corporate message into compelling visual narratives. From company profiles to internal communications, we produce professional videos that engage stakeholders and reinforce your brand identity. Our corporate video production combines strategic messaging with cinematic quality.",
    outcome: "Professional Authority",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2600&auto=format&fit=crop",
    videoUrl: "https://cdn.coverr.co/videos/coverr-clapping-audience-5324/1080p.mp4",
    lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_i2eyukor.json", // Stats New
    features: ["Company Profile Videos", "Training & Onboarding Content", "Event Coverage", "Executive Messaging"]
  },
  {
    slug: "digital-business-card",
    category: "Production",
    pillar: "Production",
    title: "Digital Business Card Maker",
    iconName: "CreditCard",
    tagline: "Modern Networking",
    description: "Interactive digital business cards that make lasting impressions in the digital age.",
    detailedContent: "Replace traditional paper cards with dynamic digital experiences. Our digital business card solutions allow you to share contact information, portfolios, and social links instantly. Track engagement, update information in real-time, and stand out in a sea of traditional networking.",
    outcome: "Digital First Impression",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2600&auto=format&fit=crop",
    videoUrl: "https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-4638/1080p.mp4",
    lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_swnrn2oy.json", // Animation New
    features: ["Custom Design Templates", "QR Code Integration", "Analytics Dashboard", "Multi-Platform Compatibility"]
  },
  {
    slug: "ad-film-making",
    category: "Production",
    pillar: "Production",
    title: "Ad Film Making",
    iconName: "Film",
    tagline: "Cinematic Advertising",
    description: "High-impact commercial films designed to captivate audiences and drive conversions.",
    detailedContent: "Create advertising that stops the scroll and drives action. Our ad film production combines storytelling mastery with conversion-focused messaging. From concept to final cut, we craft commercials that resonate emotionally while delivering measurable business results across all platforms.",
    outcome: "Maximum Impact",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2600&auto=format&fit=crop",
    videoUrl: "https://cdn.coverr.co/videos/coverr-camera-dolly-shot-5329/1080p.mp4",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_ybiszbil.json", // Loading New
    features: ["Concept Development", "Professional Cinematography", "Post-Production Excellence", "Multi-Format Delivery"]
  },
  {
    slug: "product-photography",
    category: "Production",
    pillar: "Production",
    title: "Product Photography",
    iconName: "Camera",
    tagline: "Visual Commerce",
    description: "Studio-quality product photography that showcases your products in their best light.",
    detailedContent: "Your products deserve to shine. Our product photography services deliver high-resolution images that highlight every detail and feature. From e-commerce catalogs to marketing campaigns, we create visuals that drive purchase decisions and elevate your brand's perceived value.",
    outcome: "Conversion Excellence",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2600&auto=format&fit=crop",
    videoUrl: "https://cdn.coverr.co/videos/coverr-photographer-taking-pictures-of-a-model-5332/1080p.mp4",
    lottieUrl: "https://assets7.lottiefiles.com/packages/lf20_tutvdkg0.json", // Red Theme New
    features: ["Studio & Lifestyle Shots", "360° Product Views", "Image Retouching", "E-commerce Optimization"]
  },
  // --- ORM Pillar ---
  {
    slug: "orm",
    category: "ORM",
    pillar: "ORM",
    title: "Online Reputation Management",
    iconName: "ShieldCheck",
    tagline: "Reputation Security",
    description: "AI-driven monitoring and management of your digital presence to protect brand trust.",
    detailedContent: "Your reputation is built over years but can be damaged in seconds. Our ORM systems provide a shield for your digital brand, monitoring sentiment 24/7. We proactively manage reviews and mentions across all platforms to ensure your brand's first impression is always pristine.",
    outcome: "Unyielding Trust",
    image: "https://images.unsplash.com/photo-1563206767-5b1d97299337?q=80&w=2574&auto=format&fit=crop",
    lottieUrl: "https://assets4.lottiefiles.com/packages/lf20_kyu7xb1v.json", // Shield Protection
    features: ["24/7 Review Monitoring", "Automated Sentiment Analysis", "Proactive Response Strategy", "Authority Building"]
  },
  {
    slug: "crisis-communication",
    category: "ORM",
    pillar: "ORM",
    title: "Crisis Communication",
    iconName: "Megaphone",
    tagline: "Emergency Response",
    description: "Swift, strategic communication systems to mitigate risks and protect brand integrity.",
    detailedContent: "When traditional systems fail, our crisis communication protocols take over. We build defensive communication infrastructures that allow brands to respond to negative events with speed, transparency, and authority, minimizing damage and restoring public confidence.",
    outcome: "Risk Mitigation",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2574&auto=format&fit=crop",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_vnikrcia.json", // Alert/Warning Bell
    features: ["Emergency Response Planning", "Media Relationship Management", "Sentiment Stabilization", "Post-Crisis Audits"]
  },
  {
    slug: "sentiment-analysis",
    category: "ORM",
    pillar: "ORM",
    title: "Sentiment Analysis",
    iconName: "Fingerprint",
    tagline: "Public Perception",
    description: "Deep AI-driven insights into how the world perceives and speaks about your brand.",
    detailedContent: "Understand the 'why' behind the mentions. Our sentiment analysis tools use advanced AI to categorize the emotional tone of brand mentions. By understanding public perception in real-time, we can adjust strategies to capitalize on positive trends and address negative ones before they scale.",
    outcome: "Perception Mapping",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2600&auto=format&fit=crop",
    lottieUrl: "https://assets3.lottiefiles.com/packages/lf20_ydo1amjm.json", // Sentiment/Emotion
    features: ["AI Emotional Categorization", "Trend Identification", "Audience Mood Tracking", "Strategic Alignment"]
  },
  {
    slug: "brand-monitoring",
    category: "ORM",
    pillar: "ORM",
    title: "Brand Monitoring",
    iconName: "Eye",
    tagline: "Digital Vigilance",
    description: "Comprehensive tracking of all brand mentions across web, social, and news platforms.",
    detailedContent: "Never miss a conversation about your brand. We provide exhaustive digital monitoring that tracks your name, products, and key executives across the global web. Real-time alerts ensure you are always the first to know what is being said, allowing for instant engagement.",
    outcome: "Total Visibility",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_qmfs6c3i.json", // SEO/Search Fresh
    features: ["Real-Time Alert Systems", "Social Listening Tools", "Competitor Benchmarking", "News & Media Tracking"]
  },
  {
    slug: "social-media-handling",
    category: "ORM",
    pillar: "ORM",
    title: "Social Media Handling",
    iconName: "MessageSquare",
    tagline: "Active Engagement",
    description: "Professional management of social channels to maintain engagement and brand tone.",
    detailedContent: "Consistency is key to a trusted social presence. Our social media handling systems ensure your brand's voice is maintained across all platforms. We handle the day-to-day engagement, ensuring comments are addressed, questions are answered, and interest is nurtured into community loyalty.",
    outcome: "Brand Consistency",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2574&auto=format&fit=crop",
    lottieUrl: "https://assets6.lottiefiles.com/packages/lf20_w98qte06.json", // Trophy/Achievement
    features: ["Multi-Channel Management", "Community Moderation", "Engagement Response", "Voice & Tone Consistency"]
  }
];
