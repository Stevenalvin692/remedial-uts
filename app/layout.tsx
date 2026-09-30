import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PustakaKu | Perpustakaan Digital",
  description: "Website perpustakaan sederhana, dibikin pake Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}