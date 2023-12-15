import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "DEI Webpage",
  description: "Miami University Libraries DEI Webpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <base target="_blank" />
      </Head>
      <body>
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
