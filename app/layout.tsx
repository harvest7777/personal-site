import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Tabs from "./tabs";
import Fog from "./fog";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ryan's site",
  description: "thx for viewing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased flex flex-col items-center justify-center overflow-y-auto mb-96`}
      >
        {/* <Tabs></Tabs> */}
        <main className="relative z-10 p-4 w-full max-w-3xl mb-12">
          <Fog />
          {children}
        </main>
      </body>
    </html>
  );
}
