import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pickle CDO: Open Play Manager for Pickleball",
  description:
    "Run open play pickleball sessions in one tap: auto-balanced rotations, live court scoring, and a leaderboard. Free forever, no login, works offline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="grain min-h-full bg-[#05070f] text-[#eef2fb]">
        {children}
      </body>
    </html>
  );
}
