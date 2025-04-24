'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioModel } from '../lib/models/portfolio.model';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@iconify/react';

export type PortfolioSquaredProps = {
  projects: PortfolioModel[];
};

export type Filter = 'web' | 'mobile' | 'full' | 'all';

const PortfolioSquared = ({ projects }: PortfolioSquaredProps) => {
  const [filter, setFilter] = useState<Filter>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = useMemo(
    () =>
      projects.filter((p) =>
        filter === 'all' ? true : p.category?.includes(filter)
      ),
    [projects, filter]
  );

  return (
    <section id="portfolio">
      <div className="w-full mt-20" data-aos="fade-up">
        <header className="flex flex-col flex-wrap items-center w-full mb-5">
          <h1 className="text-4xl md:text-5xl font-medium">Case Studies</h1>
        </header>

        <div
          className="flex flex-row items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ul className="flex flex-row flex-wrap items-center justify-center gap-4 mb-8">
            <li
              className={`rounded-full whitespace-nowrap overflow-hidden px-8 py-2 cursor-pointer border border-blue-500 transition-all ${
                filter === 'all' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </li>
            <li
              className={`rounded-full whitespace-nowrap overflow-hidden px-8 py-2 cursor-pointer border border-blue-500 transition-all ${
                filter === 'full' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setFilter('full')}
            >
              Web App
            </li>
            <li
              className={`rounded-full whitespace-nowrap overflow-hidden px-8 py-2 cursor-pointer border border-blue-500 transition-all ${
                filter === 'mobile' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setFilter('mobile')}
            >
              Mobile
            </li>
            <li
              className={`rounded-full whitespace-nowrap overflow-hidden px-8 py-2 cursor-pointer border border-blue-500 transition-all ${
                filter === 'web' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setFilter('web')}
            >
              Front end
            </li>
          </ul>
        </div>
        <div
          className="grid transition-all xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <AnimatePresence presenceAffectsLayout>
            {filteredProjects &&
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      scale: hoveredId === project.id ? 1.05 : 1,
                      zIndex: hoveredId === project.id ? 10 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <Link
                      href={project.id.replace('.mdx', '')}
                      className="w-full h-full block"
                    ></Link>
                    <Card className="overflow-hidden bg-gray-900 border-gray-800 transition-all duration-300 hover:border-gray-700 rounded-none shadow-lg">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={project.imgUrl || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </Card>

                    <motion.div
                      className="absolute top-full left-0 right-0 p-4 bg-gray-900 shadow-lg border border-gray-800 rounded-b-none"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                        y: hoveredId === project.id ? 0 : -20,
                        pointerEvents:
                          hoveredId === project.id ? 'auto' : 'none',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={project.id.replace('.mdx', '')}
                        className="w-full h-full block"
                      >
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-gray-800 text-gray-300 hover:bg-gray-700"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          asChild
                          size="sm"
                          variant="default"
                          className="gap-2"
                        >
                          <Link href={project.demoUrl ?? ''}>
                            <Icon
                              icon="mingcute:external-link-fill"
                              className="h-4 w-4"
                            />
                            Demo
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="gap-2"
                        >
                          <Link href={project.repoUrl ?? ''}>
                            <Icon icon="mdi:github" className="h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSquared;
