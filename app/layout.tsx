import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/providers/Providers";
import SocialSidebar from "@/components/SocialSideBar";
import AppNavbar from "@/components/AppNavbar";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <PrimeReactProvider>
            <AppNavbar />
            <SocialSidebar />
            {children}
          </PrimeReactProvider>
        </Providers>
      </body>
    </html>
  );
}
