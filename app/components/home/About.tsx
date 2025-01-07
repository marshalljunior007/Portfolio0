import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="flex flex-col pb-20 md:pt-20">
      <div>
        <span className="py-3 mb-2 block text-sm font-semibold bg-background sticky top-0 z-20 md:hidden">
          ABOUT
        </span>
        <div className="flex flex-col gap-2 text-sm text-secondary leading-6">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            I am a software engineer who is passionate about building scalable
            and reliable software solutions. I have experience in building web
            applications, APIs, and mobile applications. I am proficient in
            JavaScript, TypeScript, ReactJS, NextJS, NestJS, NodeJS, C# .NET. I
            am also familiar with cloud technologies such as AWS, GCP, and
            Azure.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Currently, I am a software engineer at{' '}
            <a
              className="text-white hover:underline"
              href="https://www.tegagadgets.com/"
            >
              Tega Gadgets
            </a>
            , I build software solutions that streamline gadget sales, swaps,
            and purchases, enhancing the tech experience for customers across
            Africa
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            In the past, I&apos;ve had to develop software across various
            industries such as finance, healthcare, education and e-commerce -
            from enterprise applications to consumer-facing applications.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            In my spare time, I enjoy reading, beign at the gym, Playing
            Football, or thinking about the next big thing I can build.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
