import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "A Supabase-backed student learning dashboard built with Next.js App Router."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
