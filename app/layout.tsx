import { FrameContent, FrameFooter, FrameHeader, FrameRoot, FrameSidebar } from "@/components/ui/frame";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
  description: "Welcome to the Arena!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <FrameRoot asChild>
        <body className={cn("static h-dvh overflow-auto antialiased", geistSans.variable, geistMono.variable)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <FrameHeader>
              <nav className="flex flex-row justify-start items-baseline gap-2">
                <Link href="/">
                  <span>
                    <span className="text-base font-semibold">chk</span>
                    <span className="text-xl font-extrabold">Arena</span>
                  </span>
                </Link>
                <Link href="/tests">
                  <span>Tests</span>
                </Link>
              </nav>
              <nav>
                <ThemeToggle weight="bold" kind="ghost" />
              </nav>
            </FrameHeader>
            <FrameSidebar side="end">Sidebar</FrameSidebar>
            <FrameContent>{children}</FrameContent>
            <FrameFooter>Footer</FrameFooter>
          </ThemeProvider>
        </body>
      </FrameRoot>
    </html>
  );
}
