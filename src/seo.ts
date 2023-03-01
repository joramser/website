import type { Metadata } from 'next';
import { data } from '@web/data';

export const defaultSEO: Metadata = {
  title: data.fullName,
  description: data.slogan,
  openGraph: {
    title: data.fullName,
    description: data.slogan,
    type: 'website',
    images: [
      {
        url: `/images/og.jpg`,
        width: 1200,
        alt: 'Og image',
      },
    ],
  },
  twitter: {
    card: 'summary',
  },
};
