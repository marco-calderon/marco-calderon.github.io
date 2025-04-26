'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Tag from '@/app/components/Tag';
import { tags } from '@/lib/data/tags.data';
import { PortfolioModel } from '@/lib/models/portfolio.model';

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
              filteredProjects.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`filter-${p.category} w-full h-full aspect-[4/3]`}
                  layout
                >
                  <Link
                    href={p.id.replace('.mdx', '')}
                    className="w-full h-full block"
                  >
                    <div className="w-full h-full relative transition-all cursor-pointer bg-white/75 group">
                      {p.imgUrl ? (
                        <Image
                          src={p.imgUrl}
                          className="h-full w-full object-cover"
                          alt={p.title}
                          width={800}
                          height={600}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={false}
                        />
                      ) : null}
                      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center transition-all opacity-0 backdrop-blur-md bg-white/50 group-hover:opacity-100">
                        <h4 className="text-lg font-bold text-blue-900">
                          {p.title}
                        </h4>
                        <div className="flex-row gap-1 mb-2 text-black d-flex">
                          {p.tags &&
                            p.tags.map((tagId) => {
                              const t = tags.find((t) => t.id === tagId);
                              return (
                                <Tag
                                  key={t?.id}
                                  tag={t?.name ?? ''}
                                  icon={t?.icon ?? ''}
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSquared;
