import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Icons } from '@/app/ui/icons';
import images from '@/public/images';

export default function Projects() {
  const projects = [
    {
      name: 'E-Commerce Gadget Web Application',
      description: `A web application that simplifies the buying, selling, and swapping of gadgets for tech enthusiasts.`,
      technologies: ['Typescript', 'ReactJS', 'NextJS', 'TailwindCSS', 'AWS'],
      image: images.Tg,
      link: 'https://www.tegagadgets.com',
    },
    {
      name: 'Apple website Clone',
      description: `A clone Website of Apple iphone 15 pro website`,
      technologies: ['ReactJS', 'GSAP', 'ThreeJs', 'Git'],
      image: images.AppleClone,
      link: 'https://apple-clone-cyan-nine.vercel.app/',
    },
    {
      name: 'Homme Web Application',
      technologies: ['ReactJs', 'TailwindCSS'],
      image: images.Homme,
      link: 'https://homme-eight.vercel.app/',
    },
    {
      name: 'SpaceX Clone Website',
      description: 'This is a clone of the popular SpaceX website',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
      image: images.SpaceX,
      link: 'https://spacex-lake-pi.vercel.app/',
    },
  ];

  return (
    <section className="flex flex-col pb-20">
      <div>
        <span className="py-3 mb-2 block text-sm md:text-base font-semibold bg-background sticky top-0 z-20">
          PROJECTS
        </span>
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-3 my-8 last:mb-0">
            <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
              <Link href={project.link} className="flex flex-row group">
                <h4 className="font-medium text-foreground">{project.name}</h4>
                <span className="rotate-45 scale-90 opacity-70 transition group-hover:opacity-100 group-hover:scale-100">
                  <Icons.ArrowUp />
                </span>
              </Link>
            </div>
            <p className="text-secondary text-sm md:text-base">
              {project.description}
            </p>
            {project.technologies && (
              <div className="flex flex-row flex-wrap gap-2 text-xs">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="p-2 px-4 rounded-full bg-primary-light text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="w-48 h-24 rounded-xl relative overflow-hidden border-white/20 border-[1px]">
              <Image
                src={project.image || '/images/placeholder.png'}
                alt={project.name}
                className="text-xs"
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
