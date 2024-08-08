import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./header.css";

export const metadata: Metadata = {
  title: "DEI Webpage",
  description: "Miami University Libraries DEI Webpage",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning={true}>
        <Header />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
