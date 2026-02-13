import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  post: {
    title: string;
    slug: { current: string };
    mainImage: any;
    publishedAt: string;
    categories: string[];
    author: string;
    body: any[];
  };
}

export default function BlogCard({ post }: Props) {
  // Extract a short excerpt from the body if available
  const excerpt = post.body?.find((block) => block._type === "block" && block.children)?
    .children[0]?.text.slice(0, 100) + "...";

  return (
    <Link href={`/blog/${post.slug.current}`} className="group flex flex-col h-full bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
      <div className="relative h-60 w-full overflow-hidden">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
           <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-500">
             No Image
           </div>
        )}
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-2 mb-3">
            {post.categories?.map((category) => (
                <span key={category} className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                    {category}
                </span>
            ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-neutral-400 text-sm line-clamp-3 mb-4 flex-grow">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-neutral-500 mt-auto pt-4 border-t border-white/5">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>By {post.author}</span>
        </div>
      </div>
    </Link>
  );
}
