import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { Header } from "@/app/ui/header";
import { Footer } from "@/app/ui/footer";

const manrope = Manrope({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Mónica Varas Fine Art Wedding Photographer',
    default: 'Mónica Varas Fine Art Wedding Photographer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mónica Varas',
    description: 'Fine Art Wedding Photography',
    images: ['https://www.bymonicavaras.com/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Mónica Varas" />
      </head>
      <body
        className={`${manrope.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="m-2 p-2 border-b-[1px] border-foreground flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
