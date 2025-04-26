import React from 'react';
import { Icon } from '@iconify/react';

const Services = () => {
  return (
    <section id="services">
      <div className="w-full px-5 mt-20 md:px-40">
        <header className="flex flex-col items-center mb-5 w-full">
          <h2 className="text-base font-bold text-blue uppercase">Services</h2>
          <p className="text-4xl ">What I can do</p>
        </header>

        <div className="grid gap-16 auto-rows-1fr xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center flex-1 p-20 px-8 text-center transition-all border-b-4 border-blue-500 min-h-72 py-auto h-100 group rounded-3xl hover:bg-blue-500">
              <div className="flex flex-col items-center justify-center w-24 h-24 mb-16 text-white bg-blue-500 group-hover:bg-white group-hover:text-blue-500 rounded-3xl">
                <Icon icon="ri:window-line" className="text-5xl" />
              </div>
              <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300 group-hover:text-white">
                Front End
              </h3>
              <p className="flex-1 grow group-hover:text-white">
                Modern Front End development with React, Angular and plain HTML,
                JavaScript and CSS. I can also work with Bootstrap, TailwindCSS,
                Foundation, and other styling solutions for your projects.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-100">
            <div className="flex flex-col items-center justify-center flex-1 px-8 pt-20 text-center transition-all border-b-4 border-orange-500 min-h-72 py-auto h-100 group rounded-3xl hover:bg-orange-500">
              <div className="flex flex-col items-center justify-center w-24 h-24 mb-16 text-white bg-orange-500 group-hover:bg-white group-hover:text-orange-500 rounded-3xl">
                <Icon icon="ri:server-line" className="text-5xl" />
              </div>
              <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300 group-hover:text-white">
                Back End
              </h3>
              <p className="flex-1 grow mb-20 group-hover:text-white">
                Using modern technologies and used frameworks such as Django,
                ASP.NET, Spring Framework, Express, Nest.js, Ruby on Rails. If
                you have another option, we can discuss it.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-100">
            <div className="flex flex-col items-center justify-center flex-1 px-8 pt-20 text-center transition-all border-b-4 border-green-500 min-h-72 py-auto h-100 group rounded-3xl hover:bg-green-500">
              <div className="flex flex-col items-center justify-center w-24 h-24 mb-16 text-white bg-green-500 group-hover:bg-white group-hover:text-green-500 rounded-3xl">
                <Icon icon="ri:global-line" className="text-5xl" />
              </div>
              <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300 group-hover:text-white">
                REST API Development
              </h3>
              <p className="flex-1 grow mb-20 group-hover:text-white">
                Integrating, implementing REST APIs with your selected
                technology. Optimization of existing code for performance (in
                time and memory).
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-100">
            <div className="flex flex-col items-center justify-center flex-1 px-8 pt-20 text-center transition-all border-b-4 border-red-500 min-h-72 py-auto h-100 group rounded-3xl hover:bg-red-500">
              <div className="flex flex-col items-center justify-center w-24 h-24 mb-16 text-white bg-red-500 group-hover:bg-white group-hover:text-red-500 rounded-3xl">
                <Icon icon="ri:database-2-line" className="text-5xl" />
              </div>
              <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300 group-hover:text-white">
                Database Administration and Development
              </h3>
              <p className="flex-1 grow mb-20 group-hover:text-white">
                From making performant queries to database schema migrations. I
                can also work with ETL tasks.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-100">
            <div className="flex flex-col items-center justify-center flex-1 px-8 pt-20 text-center transition-all border-b-4 border-purple-500 min-h-72 py-auto h-100 group rounded-3xl hover:bg-purple-500">
              <div className="flex flex-col items-center justify-center w-24 h-24 mb-16 text-white bg-purple-500 group-hover:bg-white group-hover:text-purple-500 rounded-3xl">
                <Icon icon="ri:pie-chart-line" className="text-5xl" />
              </div>
              <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300 group-hover:text-white">
                Data Mining and Processing
              </h3>
              <p className="flex-1 grow mb-20 group-hover:text-white">
                Integrate business logic into data processing from different
                sources, such as APIs and dynamic websites.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-100">
            <div className="flex flex-col items-center justify-center flex-1 px-8 pt-20 text-center transition-all border-b-4 border-indigo-500 min-h-72 py-auto h-100 group rounded-3xl hover:bg-indigo-500">
              <div className="flex flex-col items-center justify-center w-24 h-24 mb-16 text-white bg-indigo-500 group-hover:bg-white group-hover:text-indigo-500 rounded-3xl">
                <Icon icon="ri:cloud-line" className="text-5xl" />
              </div>
              <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300 group-hover:text-white">
                DevOps
              </h3>
              <p className="flex-1 grow mb-20 group-hover:text-white">
                If you need to manage your development operations, I can help
                you in the cloud your project uses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
