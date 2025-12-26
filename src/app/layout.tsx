import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import KonamiCode from "@/components/ui/konami-code";
import MouseTrail from "@/components/ui/mouse-trail";
import CommandMenu from "@/components/ui/command-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Michael Mokua | Full Stack Developer",
    template: "%s | Michael Mokua",
  },
  description: "Personal portfolio of Michael Mokua. Full Stack Developer specializing in Next.js, React, and Python.",
  authors: [{ name: "Michael" }],
  metadataBase: new URL("https://example.com"), // Replace with actual domain later
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Michael Mokua | Full Stack Developer",
    description: "Personal portfolio of Michael Mokua. Full Stack Developer specializing in Next.js, React, and Python.",
    siteName: "Michael Mokua Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Mokua | Full Stack Developer",
    creator: "@Im_Dah_Dude___",
  },
};

import AgentMeta from "@/components/agent-meta";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AgentMeta />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <KonamiCode />
          <MouseTrail />
          <CommandMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
