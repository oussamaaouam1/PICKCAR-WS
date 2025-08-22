import type { Metadata } from "next";
import { Geist, Geist_Mono,Michroma } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
//pickcar fonts ---------------------
import localFont from "next/font/local";


const merase = localFont({
  src: [
    {
      path: "../../public/fonts/Merase.ttf",
      weight: "700",
    },
  ],
  variable: "--font-merase",
  // weight: "700",
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "PICKCAR",
  description: "New way to rent a car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${michroma.variable} ${merase.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster closeButton />
      </body>
    </html>
  );
}
