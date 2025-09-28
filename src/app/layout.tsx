import "@web/styles/globals.css";

import { AnalyticsWrapper } from "@web/components/Analytics";
import { Container } from "@web/components/Container";
import { Footer } from "@web/components/Footer";
import { defaultSEO } from "@web/seo";
import type { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  ...defaultSEO,
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body
        className="bg-zinc-900 leading-4 text-gray-300"
        style={{
          backgroundImage: `linear-gradient(
              315deg,
              hsl(240deg 27% 15%) 0%,
              hsl(240deg 24% 15%) 34%,
              hsl(240deg 22% 15%) 45%,
              hsl(240deg 19% 15%) 53%,
              hsl(240deg 16% 15%) 59%,
              hsl(240deg 14% 15%) 65%,
              hsl(240deg 11% 15%) 70%,
              hsl(240deg 9% 16%) 76%,
              hsl(240deg 6% 16%) 84%,
              hsl(240deg 4% 16%) 100%
            )`,
        }}
      >
        <Container className="px-4 sm:px-0 lg:px-16">
          {children}
          <AnalyticsWrapper />
          <Footer />
        </Container>
      </body>
    </html>
  );
}
