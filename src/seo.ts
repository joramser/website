import { data } from "@web/data";
import type { Metadata } from "next";

export const defaultSEO: Metadata = {
  metadataBase: new URL("https://jorge.rs"),
  title: data.fullName,
  description: data.slogan,
  openGraph: {
    title: data.fullName,
    description: data.slogan,
    type: "website",
    images: [
      {
        url: `/images/og.jpg`,
        width: 1200,
        alt: "Og image",
      },
    ],
  },
  twitter: {
    card: "summary",
  },
};
