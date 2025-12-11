import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "1Bonus — Программа лояльности для вашего бизнеса",
  description: "Увеличьте повторные продажи на 40% с помощью умной бонусной системы. RFM-аналитика, WhatsApp рассылки, автоматические бонусы на день рождения.",
  keywords: "программа лояльности, бонусная система, CRM, WhatsApp рассылки, RFM аналитика",
  openGraph: {
    title: "1Bonus — Программа лояльности для вашего бизнеса",
    description: "Увеличьте повторные продажи на 40% с помощью умной бонусной системы",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
