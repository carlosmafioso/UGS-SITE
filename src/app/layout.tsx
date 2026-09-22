import type { Metadata } from "next";
import { Manrope, Geist } from "next/font/google";
import "./globals.css";
import { LucyChatWidget } from "@/components/LucyChatWidget";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans', display: 'swap'});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UGS Portal | Universidade Gregório Semedo",
  description: "Portal institucional e de gestão académica da Universidade Gregório Semedo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={cn("light", "font-sans", geist.variable, "w-full max-w-full overflow-x-hidden")} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.variable} antialiased font-display w-full max-w-full overflow-x-hidden min-h-screen`}>
        {children}
        <LucyChatWidget />
      </body>
    </html>
  );
}
