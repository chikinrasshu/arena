import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  FrameContents,
  FrameFooter,
  FrameHeader,
  FrameHeaderNav,
  FrameRoot,
} from "@/components/frame";
import { ViewTransition } from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "chkArena",
  description: "Welcome to chkArena!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ViewTransition>
        <FrameRoot asChild>
          <body
            className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
          >
            <FrameHeader>
              <FrameHeaderNav>
                <Link
                  href="/"
                  className="inline-flex items-stretch px-2 hover:bg-black/10"
                >
                  <span className="inline-flex items-baseline">
                    <span className="text-lg font-light">chk</span>
                    <span className="text-xl font-extrabold">Arena</span>
                  </span>
                </Link>
                <Link
                  href="/units"
                  className="inline-flex items-stretch px-1 hover:bg-black/10"
                >
                  <span className="inline-flex items-center">Units</span>
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-stretch px-1 hover:bg-black/10"
                >
                  <span className="inline-flex items-center">Shop</span>
                </Link>
              </FrameHeaderNav>
              <FrameHeaderNav>
                <Link
                  href="/profile"
                  className="inline-flex items-stretch px-1 hover:bg-black/10"
                >
                  <span className="inline-flex items-center">Profile</span>
                </Link>
                <Link
                  href="/settings"
                  className="inline-flex items-stretch px-1 hover:bg-black/10"
                >
                  <span className="inline-flex items-center">Settings</span>
                </Link>
              </FrameHeaderNav>
            </FrameHeader>
            <FrameContents>{children}</FrameContents>
            <FrameFooter>
              <span className="text-xs font-extralight">
                &copy; 2025 chk.jp.net - All Rights Reserved
              </span>
            </FrameFooter>
          </body>
        </FrameRoot>
      </ViewTransition>
    </html>
  );
}
