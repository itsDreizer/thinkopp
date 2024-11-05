import type { Metadata } from "next";
import "./fonts/stylesheet.css";
import "./globals.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Тестовое задание в thinkpop",
  description: "Тестовое задание в thinkpop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
