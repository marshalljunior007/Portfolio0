import Link from 'next/link';
import React from 'react';
import { Icons } from '@/app/ui/icons';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      date: '2022 - Present',
      roles: ['CEO, CTO & Founder ~ Tega Gadgets'],
      description: `I founded Tegas Gadget Store, a platform that simplifies the buying, selling, and swapping of gadgets for tech enthusiasts. I oversee the technical direction, developing scalable and efficient software solutions to enhance customer experience, drive sales, and optimize operations. I build and maintain e-commerce platforms, integrate payment systems, and ensure seamless user interactions across web and mobile platforms..`,
      skills: ['Javascript', 'Typescript', 'React', 'NextJS','TailwindCSS','AWS'],
      link: 'https://www.tegagadgets.com',
    },
    {
      date: 'June 2024 - October 2024',
      roles: ['Web Developer ~ GENNIAOS TECH'],
      description: `Built a web application reducing agent data entry errors by 25% and boosting user engagement by 30% through modern, interactive UI design.

Integrated RESTful APIs for responsive design and seamless backend connections, cutting load times by 20%. Delivered a scalable, high-performing solution that improved workflow efficiency.`,
      skills: [
        'Javascript',
        'Typescript',
        'React',
        'GSAP',
        'Git',
        'Github',
        'NextJS',
      ],
      link: 'https://firstregistrarsnigeria.com',
    },
    {
      date: 'june 2019 - August 2019',
      roles: ['Intern Software Engineer ~ Coure Tech'],
      description: ` I developed responsive websites, integrate APIs, and enhance user interfaces. 
      I gained hands-on experience in full-stack development, deployment, and version control. This role sharpened my problem-solving skills and deepened my understanding of building scalable, user-focused web solutions.`,
      skills: ['Javascript', 'React', 'Git', 'Github'],
      link: 'https://www.coure-tech.com/',
    },
    {
      date: 'March 2022 - August 2022',
      roles: ['Web Developer ~ Starsight Energy', 'Intern Power Auditor'],
      description: `Developed web applications to monitor solar panel performance in real time, boosting data reporting speed by 30%. Conducted on-site power audits, identifying 15% potential energy savings and providing optimization recommendations to improve efficiency.

This project combined technical development with hands-on fieldwork, delivering impactful solutions that enhanced energy monitoring and operational performance.`,
      skills: ['Javascript', 'Typescript', 'React'],
      link: 'https://starsightenergy.com/',
    },
  ];

  return (
    <section className="flex flex-col pb-20">
      <div>
        <span className="py-3 mb-2 block text-sm md:text-base font-semibold bg-background sticky top-0 z-20">
          EXPERIENCE
        </span>
        <div className="flex flex-col gap-5">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-sm md:text-base text-secondary leading-6 mb-3"
            >
              <span className="text-sm mb-2 block">{experience.date}</span>
              <div className="flex flex-col gap-1">
                {experience.roles.map((role, index) => {
                  if (index === 0) {
                    return (
                      <Link
                        key={index}
                        href={experience.link ?? '#'}
                        className={`flex flex-row group ${
                          experience.link
                            ? 'cursor-pointer'
                            : 'pointer-events-none'
                        }`}
                      >
                        <h3
                          key={index}
                          className="text-foreground text-semibold"
                        >
                          {role}
                        </h3>
                        {experience.link && (
                          <span className="rotate-45 scale-90 opacity-70 transition group-hover:opacity-100 group-hover:scale-100">
                            <Icons.ArrowUp />
                          </span>
                        )}
                      </Link>
                    );
                  }
                  return (
                    <h3 key={index} className="text-secondary text-semibold">
                      {role}
                    </h3>
                  );
                })}
              </div>
              <p className="mb-3 mt-2">{experience.description}</p>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium">Skills Utilized</p>
                <div className="flex flex-row flex-wrap gap-2 text-xs">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="p-2 px-4 rounded-full bg-primary-light text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
