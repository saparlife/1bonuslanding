import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "1Bonus — Умная программа лояльности",
  description: "Увеличьте выручку на 40% за 3 месяца. AI-аналитика, WhatsApp-маркетинг, автоматические триггеры. 500+ компаний уже используют.",
  keywords: "программа лояльности, бонусная система, CRM, WhatsApp рассылки, RFM аналитика, retention, LTV",
  openGraph: {
    title: "1Bonus — Умная программа лояльности",
    description: "Увеличьте выручку на 40% за 3 месяца. AI-аналитика, WhatsApp-маркетинг, автоматические триггеры.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "1Bonus — Умная программа лояльности",
    description: "Увеличьте выручку на 40% за 3 месяца",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#030712]`}>
        {children}
      </body>
    </html>
  );
}
