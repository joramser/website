import { NextSeo } from 'next-seo';

import { DefaultTags } from '@web/components/DefaultTags';
import { defaultSEO } from '@web/seo';

export default function RootHead() {
  return (
    <>
      <DefaultTags />
      <NextSeo useAppDir={true} {...defaultSEO} />
    </>
  );
}
