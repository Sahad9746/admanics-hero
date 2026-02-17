import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import { services, pillarMetadata } from '@/constants/services';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://admanics.com';

  // Static routes
  const routes = [
    '',
    '/about',
    '/work',
    '/contact',
    '/services',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }));

  // Blog posts
  const posts = await client.fetch(postsQuery);
  const blogRoutes = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Service Pillars
  const pillarRoutes = Object.values(pillarMetadata).map((meta) => ({
    url: `${baseUrl}/services/${meta.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Services
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...blogRoutes, ...pillarRoutes, ...serviceRoutes];
}
