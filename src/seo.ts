import { DefaultSeoProps } from 'next-seo';
import { data } from '@web/data';

export const defaultSEO: DefaultSeoProps = {
  title: data.fullName,
  description: data.slogan,
  twitter: {
    cardType: 'summary',
  },
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
};
