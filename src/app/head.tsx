import { NextSeo } from 'next-seo';

import { data } from '@web/data';

export default function RootHead() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />

      <title>{data.fullName}</title>
      <NextSeo
        useAppDir={true}
        title={data.fullName}
        description={data.slogan}
        twitter={{
          cardType: 'summary',
        }}
        openGraph={{
          title: data.fullName,
          description: data.slogan,
          type: 'website',
          // url: '',
          // images: [
          //   {
          //     url: `${hostUrl}/images/og.jpg`,
          //     width: 1200,
          //     alt: 'Og image',
          //   },
          // ],
        }}
      />
    </>
  );
}
