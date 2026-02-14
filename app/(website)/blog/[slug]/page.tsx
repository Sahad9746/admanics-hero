import { client } from "@/sanity/lib/client";
import { postQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function PostPage(props: Props) {
  const params = await props.params;

  const post = await client.fetch(postQuery, { slug: params.slug });

  if (!post) {
      return notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10 text-center">
            {post.categories?.length > 0 && (
                <div className="flex items-center justify-center gap-2 mb-4">
                    {post.categories.map((category: string) => (
                        <span key={category} className="text-sm font-medium text-blue-500 uppercase tracking-widest">
                            {category}
                        </span>
                    ))}
                </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-neutral-400 text-sm">
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                {post.author && (
                    <div className="flex items-center gap-2">
                         {post.author.image && (
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                         )}
                        <span>By {post.author.name}</span>
                    </div>
                )}
            </div>
        </div>

        {post.mainImage && (
            <div className="relative w-full h-[400px] md:h-[600px] mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
                 <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        )}

        <article className="prose prose-lg prose-invert mx-auto prose-p:text-neutral-300 prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300">
             <PortableText value={post.body} components={RichTextComponents} />
        </article>
      </div>
      <Footer />
    </main>
  );
}
