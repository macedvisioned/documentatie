import React from 'react';
import type { Props } from '@theme/MDXComponents/A';
import { Link } from '@utrecht/component-library-react';

export default function MDXA({ href, hrefLang, className, children }: Props): JSX.Element {
  return (
    <Link href={href} hrefLang={hrefLang} className={className}>
      {children}
    </Link>
  );
}
