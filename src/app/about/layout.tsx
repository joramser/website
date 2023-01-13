import { Nav } from '@web/components/Nav';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
