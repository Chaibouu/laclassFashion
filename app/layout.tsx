import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import appConfig from "@/settings";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: appConfig.websiteTitle,
  description: appConfig.websiteDescription,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('colorMode');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const mode = stored || (prefersDark ? 'dark' : 'light');
                if (mode === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
