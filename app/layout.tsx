import { FrameContent, FrameFooter, FrameHeader, FrameRoot, FrameSidebar } from "@/components/ui/frame";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
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
        <body
          className={cn("static h-dvh overflow-auto antialiased", geistSans.variable, geistMono.variable)}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <FrameHeader>
              <nav>

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
