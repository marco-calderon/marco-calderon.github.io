import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { PortfolioModel } from '../lib/models/portfolio.model';
import { motion, AnimatePresence } from 'framer-motion';
import Tag from '../src/components/Tag';
import { tags } from '../lib/data/tags.data';

export type PortfolioProps = {
  projects: PortfolioModel[];
};

export type Filter = 'web' | 'mobile' | 'full' | 'all';

const Portfolio = ({ projects }: PortfolioProps) => {
  const [filter, setFilter] = useState<Filter>('all');

  const filteredProjects = useMemo(
    () =>
      projects.filter((p) =>
        filter === 'all' ? true : p.category?.includes(filter)
      ),
    [projects, filter]
  );

  return (
    <section id="portfolio">
      <div
        className="w-full px-8 mt-20 xs:px-20 sm:px-20 md:px-40 lg:px-40 xl:px-40"
        data-aos="fade-up"
      >
        <header className="flex flex-col flex-wrap items-center w-full mb-5">
          <h2 className="text-base font-bold text-blue-700 uppercase dark:text-blue-300">
            Portfolio
          </h2>
          <p className="text-4xl ">My latest work</p>
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
          className="grid gap-8 transition-all xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
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
                  className={`filter-${p.category}`}
                  layout
                >
                  <Link href={p.id.replace('.mdx', '')}>
                    <div className="relative transition-all cursor-pointer rounded-3xl bg-white/75 group">
                      {p.imgUrl ? (
                        <Image
                          src={p.imgUrl}
                          className="transition-all rounded-3xl"
                          alt=""
                          width={800}
                          height={600}
                        />
                      ) : null}
                      <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center p-4 text-center transition-all opacity-0 rounded-3xl backdrop-blur-md bg-white/50 group-hover:opacity-100">
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

export default Portfolio;
