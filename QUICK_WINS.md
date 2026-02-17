# Quick Wins - Easy Improvements You Can Do Right Now

## 5-Minute Fixes

### 1. Remove Unused Dependencies

```bash
npm uninstall styled-components @react-three/fiber three next-themes
```

**Impact:** Reduces bundle size by ~500KB

### 2. Update robots.txt

Replace content in `public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://admanics.com/sitemap.xml

User-agent: *
Disallow: /studio/
Disallow: /api/
```

### 3. Add Missing Environment Variable

Add to your `.env.local`:

```env
NEXT_PUBLIC_APP_URL="https://admanics.com"
```

## 15-Minute Fixes

### 4. Optimize Large Image

The file `public/images/clients_logo/7.jpg` is 168KB (too large!)

**Quick fix:**

1. Open the image in any image editor
2. Export as JPEG with 80% quality
3. Or use online tool: https://squoosh.app
4. Target: Under 20KB

### 5. Add Blog Metadata

Add to `app/(website)/blog/page.tsx` (after imports):

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Admanics",
  description:
    "Thoughts, strategies, and ideas from our team of digital experts.",
};
```

### 6. Make Footer a Server Component

In `components/Footer.tsx`:

- Remove the first line: `"use client";`
- It doesn't need to be a client component!

## 30-Minute Fixes

### 7. Add Loading States

Create `app/(website)/blog/loading.tsx`:

```tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-pulse space-y-8">
          <div className="h-12 bg-neutral-800 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-neutral-800 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

Create `app/(website)/blog/[slug]/loading.tsx`:

```tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-32">
      <div className="max-w-4xl mx-auto px-6 animate-pulse">
        <div className="h-8 bg-neutral-800 rounded w-1/4 mx-auto mb-6"></div>
        <div className="h-16 bg-neutral-800 rounded w-3/4 mx-auto mb-8"></div>
        <div className="h-96 bg-neutral-800 rounded-2xl mb-16"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 bg-neutral-800 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### 8. Add Error Boundary

Create `app/error.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Something went wrong!
        </h2>
        <p className="text-neutral-400 mb-8">
          We're sorry, but something unexpected happened.
        </p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
}
```

### 9. Add 404 Page

Create `app/(website)/not-found.tsx`:

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
```

## 1-Hour Fix

### 10. Create Sitemap

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { services, pillarMetadata } from "@/constants/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://admanics.com";

  // Get blog posts
  const posts = await client.fetch(`*[_type == "post"]{ slug, _updatedAt }`);

  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  // Service pages
  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Pillar pages
  const pillarUrls = Object.values(pillarMetadata).map((pillar) => ({
    url: `${baseUrl}/services/${pillar.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...serviceUrls, ...pillarUrls, ...blogUrls];
}
```

## Checklist

Copy this to track your progress:

```
Quick Wins (Do Today):
[ ] Remove unused npm packages
[ ] Update robots.txt
[ ] Add NEXT_PUBLIC_APP_URL to .env.local
[ ] Optimize large client logo image (7.jpg)
[ ] Add blog page metadata
[ ] Make Footer a server component

Important (Do This Week):
[ ] Add blog loading.tsx
[ ] Add blog/[slug] loading.tsx
[ ] Add error.tsx
[ ] Add not-found.tsx
[ ] Create sitemap.ts

Nice to Have (Do This Month):
[ ] Add dynamic metadata for blog posts
[ ] Optimize all client logo images
[ ] Add Suspense boundaries
[ ] Fix or remove empty route folder
```

## Testing After Changes

After making these changes, test:

1. `npm run build` - Should complete without errors
2. Check `/sitemap.xml` in browser
3. Test 404 page by visiting `/random-page`
4. Test blog loading states by throttling network
5. Check Lighthouse score (should improve!)

## Expected Results

After these quick wins:

- ✅ Faster page loads
- ✅ Better SEO (sitemap + metadata)
- ✅ Smaller bundle size
- ✅ Better user experience (loading states)
- ✅ Professional error handling
