import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";
import NavBar from "@/components/Navbar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-CELL REC",
  description: "Turn your dreams into startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
          <NavBar />
        </div>
      </body>
    </html>
  );
}




