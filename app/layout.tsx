import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art Portfolio",
  description: "A stunning portfolio for a software engineer artist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4 sticky top-0 z-50 shadow-lg">
          <nav className="flex justify-center space-x-8 font-bold">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/gallery" className="hover:underline">Gallery</Link>
            <Link href="/about" className="hover:underline">About</Link>
          </nav>
        </header>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}

