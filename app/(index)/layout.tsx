import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css"  rel="stylesheet" />
      </Head>
      <body>
        <Navigation />
        <main className="relative overflow-hidden">
          {children}</main>
        <Footer />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
