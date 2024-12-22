import clsx from "clsx";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { fontRoboto } from "@/config/fonts";
import { NextUIProvider } from "@/providers/next-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { siteConfig } from "@/config/site";
import { FixedNavbar } from "@/components/custom/fixed-navbar";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("min-screen bg-background antialiased", fontRoboto.variable)}>
        <NextUIProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange>
            <FixedNavbar 
              title={siteConfig.title} 
              navbarItems={[
                { label: "Popular", href: "/popular" },
                { label: "Changelog", href: "/changelog" } 
              ]} />
            <main>{children}</main>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
