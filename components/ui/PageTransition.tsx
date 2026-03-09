"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Prevent flicker on initial hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render children directly without animation class during SSR/initial hydration to prevent flicker
    return <div className="w-full">{children}</div>;
  }

  // Use pathname as key to force a re-mount on navigation, triggering the CSS animation
  return (
    <div key={pathname} className="animate-page-transition w-full">
      {children}
    </div>
  );
}
