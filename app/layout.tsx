import "../global.css";
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { ThemeProvider } from "@/app/components/providers/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "davidculemann.com",
    template: "%s | davidculemann.com",
  },
  description: "My personal website.",
  openGraph: {
    title: "davidculemann.com",
    description:
      "My personal website.",
    url: "https://davidculemann.com",
    siteName: "davidculemann.com",
    images: [
      {
        url: "https://davidculemann.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${calSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
