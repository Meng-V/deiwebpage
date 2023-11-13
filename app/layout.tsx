import type { Metadata } from "next";
import "./globals.css";
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
      <body>
        <Navigation />
        <main className="relative overflow-hidden">
          {children}</main>
        <Footer />
      </body>
    </html>
  );
}
