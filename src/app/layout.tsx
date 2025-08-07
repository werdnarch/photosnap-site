import { Header } from "./../components/Header";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photosnap | Frontend Mentor",
  description: "frontend mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <main className="min-h-screen w-full flex flex-col items-center">
          <Header />
          <section className="w-full max-w-[1400px]">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
