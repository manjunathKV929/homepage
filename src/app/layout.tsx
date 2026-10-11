import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITZ FIZZ — Scroll-Driven Hero Experience",
  description:
    "A scroll-driven hero interaction reproducing the reference McLaren car animation with GSAP ScrollTrigger, React 19, and Tailwind CSS.",
  keywords: [
    "ITZ FIZZ",
    "GSAP ScrollTrigger",
    "Scroll Animation",
    "Next.js App Router",
    "Frontend Engineering",
  ],
  authors: [{ name: "ITZ FIZZ Engineering Team" }],
};

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-[#121212] text-white antialiased selection:bg-[#45db7d] selection:text-black"
    >
      <body className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
