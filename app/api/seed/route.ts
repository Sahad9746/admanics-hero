import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Create Author
    const author = await client.createOrReplace({
      _id: "author-admanics-team",
      _type: "author",
      name: "Admanics Team",
      slug: { _type: "slug", current: "admanics-team" },
    });

    // 2. Create Categories
    const marketingCat = await client.createOrReplace({
      _id: "category-marketing",
      _type: "category",
      title: "Marketing",
      description: "Digital marketing strategies and insights.",
    });

    const aiCat = await client.createOrReplace({
      _id: "category-ai-automation",
      _type: "category",
      title: "AI & Automation",
      description: "Artificial Intelligence and automation trends.",
    });

    const brandCat = await client.createOrReplace({
      _id: "category-branding",
      _type: "category",
      title: "Branding",
      description: "Building strong brand identities.",
    });

    // 3. Create Posts with Multiple Paragraphs, Headings, and Lists
    const post1 = await client.createOrReplace({
      _id: "post-future-of-ai",
      _type: "post",
      title: "The Future of AI in Digital Marketing",
      slug: { _type: "slug", current: "future-of-ai-in-digital-marketing" },
      author: { _type: "reference", _ref: author._id },
      categories: [
        { _type: "reference", _ref: aiCat._id },
        { _type: "reference", _ref: marketingCat._id },
      ],
      publishedAt: new Date().toISOString(),
      body: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Artificial Intelligence is no longer a futuristic concept; it is the driving force behind modern digital marketing strategies. From predictive analytics to personalized customer experiences, AI is reshaping how brands connect with their audience.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "Why AI Matters Now" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "AI allows for processing vast amounts of data at unprecedented speeds, enabling real-time decision-making and hyper-personalization that was previously impossible. Marketers can now predict customer behavior with high accuracy.",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [{ _type: "span", text: "Key Benefits" }],
        },
        {
          _type: "block",
          listItem: "bullet",
          level: 1,
          children: [
            {
              _type: "span",
              text: "Predictive Analytics: Anticipate market trends before they happen.",
            },
          ],
        },
        {
          _type: "block",
          listItem: "bullet",
          level: 1,
          children: [
            {
              _type: "span",
              text: "Chatbots & Assistants: 24/7 customer support without human intervention.",
            },
          ],
        },
        {
          _type: "block",
          listItem: "bullet",
          level: 1,
          children: [
            {
              _type: "span",
              text: "Content Generation: Scale content production with AI tools.",
            },
          ],
        },
      ],
    });

    const post2 = await client.createOrReplace({
      _id: "post-5-strategies",
      _type: "post",
      title: "5 Strategies to Scale Your Business in 2026",
      slug: { _type: "slug", current: "5-strategies-to-scale-your-business" },
      author: { _type: "reference", _ref: author._id },
      categories: [
        { _type: "reference", _ref: marketingCat._id },
        { _type: "reference", _ref: brandCat._id },
      ],
      publishedAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
      body: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Scaling a business requires more than just hard work; it demands a strategic approach to growth. Here are five proven strategies to take your business to the next level in a competitive digital landscape.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "1. Automate Your Workflow" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Identify repetitive tasks and implement automation tools. This not only saves time but reduces human error and allows your team to focus on high-value creative work.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "2. Focus on Customer Retention" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "It costs significantly less to retain an existing customer than to acquire a new one. Implement loyalty programs and personalized email marketing to keep your audience engaged.",
            },
          ],
        },
        {
          _type: "block",
          style: "blockquote",
          children: [
            {
              _type: "span",
              text: "Growth is never by mere chance; it is the result of forces working together.",
            },
          ],
        },
      ],
    });

    const post3 = await client.createOrReplace({
      _id: "post-brand-identity",
      _type: "post",
      title: "Building a Brand Identity That Resonates",
      slug: { _type: "slug", current: "building-brand-identity" },
      author: { _type: "reference", _ref: author._id },
      categories: [{ _type: "reference", _ref: brandCat._id }],
      publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      body: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "A brand is more than just a logo. It's the emotional connection you build with your audience. In this post, we explore the core elements of a strong brand identity.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "Consistency is Key" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "From your website to your social media profiles, your visual language and tone of voice must remain consistent. This builds trust and recognition.",
            },
          ],
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Rich demo data seeded successfully!",
      created: [post1.title, post2.title, post3.title],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
