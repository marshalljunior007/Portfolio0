import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <section>
      <p className="text-secondary text-sm pb-16">
        Inspiration gotten from{' '}
        <Link href={'https://brittanychiang.com/'} className="text-foreground">
          Brittany Chang
        </Link>
        . Built with{' '}
        <Link href={'https://nextjs.org/'} className="text-foreground">
          NextJS
        </Link>
        ,{' '}
        <Link href={'https://tailwindcss.com/'} className="text-foreground">
          TailwindCSS
        </Link>
        , and{' '}
        <Link
          href={'https://www.typescriptlang.org/'}
          className="text-foreground"
        >
          Typescript
        </Link>
        . Hosted on{' '}
        <Link href={'https://vercel.com/'} className="text-foreground">
          Vercel
        </Link>
        . Written by Nwachukwu Marshall
      </p>
    </section>
  );
}
