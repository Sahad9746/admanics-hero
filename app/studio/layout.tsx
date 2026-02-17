export const metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio Content Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }} suppressHydrationWarning>{children}</body>
    </html>
  )
}
