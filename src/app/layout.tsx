import '../styles/globals.css';

import { Container } from '@web/components/Container';
import { Footer } from '@web/components/Footer';
import { AnalyticsWrapper } from '@web/components/Analytics';

interface RootLayoutProps {
  children: React.ReactNode;
}

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
