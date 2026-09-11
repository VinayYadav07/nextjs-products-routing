import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My NextJS Website",
  description: "My NextJS Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <Image src="/logo.png" alt="Website Logo" width={100} height={100} />

          <h1>My NextJs Website</h1>

          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>

        {children}

        <footer>
          <p>© 2026 My NextJS Website</p>
        </footer>
      </body>
    </html>
  );
}
