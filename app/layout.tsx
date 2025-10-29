import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Tabs from "./tabs";

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
        className={`${geistMono.variable} antialiased flex flex-col items-center justify-center overflow-auto mb-96`}
      >
        <Tabs></Tabs>
        <main className="p-4 w-full max-w-screen-md">{children}</main>
      </body>
    </html>
  );
}
