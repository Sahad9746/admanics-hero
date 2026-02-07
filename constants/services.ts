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
  features: string[];
}

export const pillarMetadata = {
  Marketing: {
    slug: "marketing",
    title: "Digital Marketing & Growth",
    description: "Our marketing systems are engineered for infinite scale. We deploy interconnected modules that track, nurture, and convert attention into predictable revenue.",
    outcome: "Revenue Acceleration",
    image: "/images/services/marketing.png"
  },
  Production: {
    slug: "production",
    title: "Production & Media",
    description: "We treat content as infrastructure. High-impact visuals meeting strategic storytelling to elevate your brand's digital authority across all channels.",
    outcome: "Brand Authority",
    image: "/images/services/product.png"
  },
  ORM: {
    slug: "orm",
    title: "ORM & Reputation",
    description: "Protect your most valuable asset. Our AI-driven reputation management systems safeguard your brand image while building trust at every digital touchpoint.",
    outcome: "Trust Security",
    image: "/images/services/intelligence.png"
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
    features: ["Immersive Sound Design", "Professional Voiceover", "Audio Post-Production", "Digital Asset Design"]
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
    features: ["Multi-Channel Management", "Community Moderation", "Engagement Response", "Voice & Tone Consistency"]
  }
];
