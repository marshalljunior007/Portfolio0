import React from 'react';
import { Icons } from '../../ui/icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const links = [
    {
      name: 'Github',
      url: 'https://github.com/marshalljunior007',
      icons: <Icons.Github />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/marshall-nwachukwu-929a03243/',
      icons: <Icons.LinkedIn />,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/_Tega_xo',
      icons: <Icons.X />,
    },
    {
      name: 'Mail',
      url: 'mailto:marshalljunior007@gmail.com',
      icons: <Icons.Mail />,
    },
    {
      name: 'Call',
      url: 'tel:+2349075856555',
      icons: <Icons.Call />,
    },
  ];

  return (
    <section className="flex flex-col py-20 pb-14 md:basis-1/2 md:h-screen md:sticky md:top-0">
      <div className="flex flex-col items-start">
        {/* <p>Hello, there. I am</p> */}
        <motion.h1
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Nwachukwu Marshall
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="my-2"
        >
          Mechatronics & Software Engineer
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-secondary mb-4 w-[90%] md:w-[50%] md:mb-16"
        >
          I find fulfilment in creating solutions to problems using technology.
        </motion.span>

        <div className="flex flex-row items-center gap-2 z-20">
          {links.map((link, index) => (
            <span
              key={index}
              className="bg-white/0 p-1 rounded-md transition hover:bg-white/10 hover:-translate-y-2"
            >
              <Link href={link.url} target="_blank" className="">
                {link.icons}
              </Link>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto hidden md:block">
        <p className="text-secondary text-xs mt-10">
          © {new Date().getFullYear()} Portfolio website. All rights reserved.
        </p>
      </div>
    </section>
  );
}
