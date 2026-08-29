import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/context/LocaleContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jingqi Lu — Applied AI & Data Workflow Builder",
  description:
    "Personal portfolio of Jingqi Lu — applied AI, agent workflows, industrial data operations, and urban analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocaleProvider>
          <Navbar />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
