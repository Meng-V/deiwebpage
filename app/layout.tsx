import type { Metadata } from "next";
import { revalidatePath } from 'next/cache'
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
      <body suppressHydrationWarning={true}>
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
revalidatePath('/', 'layout')
