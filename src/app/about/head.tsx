import { DefaultSeoProps, NextSeo } from 'next-seo';
import { DefaultTags } from '@web/components/DefaultTags';
import { data } from '@web/data';
import { defaultSEO } from '@web/seo';

// A bit awkward but next-seo DefaultSeo is not fully working for Next 13 'app' directory
const SEO: DefaultSeoProps = {
  ...defaultSEO,
  title: `About | ${data.fullName}`,
  openGraph: {
    ...defaultSEO.openGraph,
    title: `About | ${data.fullName}`,
  },
};

export default function AboutHead() {
  return (
    <>
      <DefaultTags />
      <NextSeo useAppDir={true} {...SEO} />
    </>
  );
}
