import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import appConfig from "@/settings";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/context/SessionContext";
import { getUser } from "@/actions/getUser";
import ReactQueryProvider from "./ReactQueryProvider";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: appConfig.websiteTitle,
  description: appConfig.websiteDescription,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.primary, color: theme.secondary }}>
      {children}
    </div>
  );
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {user} = await getUser();
  return (
    <SessionProvider user={user?.user}>
      <ThemeProvider>
        <Layout>
          <html lang="en">
            <Toaster />
            <ReactQueryProvider >
            {/* <body className={inter.className}>{children}</body> */}
            <body>{children}</body>
            </ReactQueryProvider>
          </html>
        </Layout>
      </ThemeProvider>
   </SessionProvider>
  );
}
