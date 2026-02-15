import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import BlogCard from "@/components/BlogCard";
import { GradientText } from "@/components/ui/GradientText";
import { Footer } from "@/components/Footer";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 md:pt-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-start text-left gap-8 mb-20 md:mb-32">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-neutral-500">
            Our Insights
          </span>
          <div className="relative">
            <GradientText 
              words="Latest Thinking & Strategies"
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
            />
          </div>
          <p className="text-neutral-400 max-w-2xl text-xl md:text-2xl leading-relaxed font-medium">
             Thoughts, strategies, and ideas from our team of digital experts.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
            {posts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 pb-40">
            <p className="text-neutral-500 text-lg">No posts found. Check back soon!</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
