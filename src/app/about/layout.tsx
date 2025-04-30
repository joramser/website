import type { Metadata } from 'next';

import { Nav } from '@web/components/Nav';
import { data } from '@web/data';
import { defaultSEO } from '@web/seo';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: `About | ${data.fullName}`,
  openGraph: {
    ...defaultSEO.openGraph,
    title: `About | ${data.fullName}`,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
