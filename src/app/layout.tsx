import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adams Hallie Ventures | Investing in the Future of Play",
  description:
    "Adams Hallie Ventures LLC is a family-led holding company dedicated to acquiring and scaling community-centric experiences. Based in Lakeway, Texas.",
  keywords: [
    "Adams Hallie Ventures",
    "holding company",
    "Pikopye's Town",
    "family entertainment",
    "Lakeway Texas",
    "indoor play",
    "community experiences",
  ],
  openGraph: {
    title: "Adams Hallie Ventures | Investing in the Future of Play",
    description:
      "A family-led holding company dedicated to acquiring and scaling community-centric experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
