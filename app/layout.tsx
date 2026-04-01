import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "What's My Home Worth? | Chad Morton | Maverick Realty",
  description: "Get an instant home value estimate for your property. Powered by real MLS data. Free, fast, no obligation.",
  openGraph: {
    title: "What's My Home Worth?",
    description: "Get your instant home value estimate — powered by real MLS data.",
    siteName: "Chad Morton | Maverick Realty LLC",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen bg-navy`}>
        {children}
      </body>
    </html>
  );
}
