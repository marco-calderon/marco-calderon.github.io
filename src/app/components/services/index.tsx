import React from 'react';
import { ServiceCard } from './service-card';

const Services = () => {
  return (
    <section id="services" className="w-full">
      <div className="w-full px-5 lg:px-0 mt-20 mx-auto max-w-auto lg:w-[1300px] lg:max-w-[1300px]">
        <header className="flex flex-col items-center mb-5 w-full">
          <h2 className="text-base font-bold text-blue uppercase">Services</h2>
          <p className="text-4xl ">What I can do</p>
        </header>

        <div className="grid gap-16 auto-rows-1fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard
            icon="ri:window-line"
            title="Front End"
            description="Modern Front End development with React, Angular and plain HTML, JavaScript and CSS. I can also work with Bootstrap, TailwindCSS, Foundation, and other styling solutions for your projects."
            backgroundClassName="bg-white/20 group-hover:bg-linear-200 from-blue to-purple/50"
          />
          <ServiceCard
            icon="ri:server-line"
            title="Back End"
            description="Using modern technologies and used frameworks such as Django, ASP.NET, Spring Framework, Express, Nest.js, Ruby on Rails. If you have another option, we can discuss it."
            backgroundClassName="bg-white/20 group-hover:bg-linear-200 from-blue to-purple/50"
          />
          <ServiceCard
            icon="ri:global-line"
            title="REST API Development"
            description="Integrating, implementing REST APIs with your selected technology. Optimization of existing code for performance (in time and memory)."
            backgroundClassName="bg-white/20 group-hover:bg-linear-200 from-blue to-purple/50"
          />
          <ServiceCard
            icon="ri:database-2-line"
            title="Database Administration and Development"
            description="From making performant queries to database schema migrations. I can also work with ETL tasks."
            backgroundClassName="bg-white/20 group-hover:bg-linear-200 from-blue to-purple/50"
          />
          <ServiceCard
            icon="ri:pie-chart-line"
            title="Data Mining and Processing"
            description="Integrate business logic into data processing from different sources, such as APIs and dynamic websites."
            backgroundClassName="bg-white/20 group-hover:bg-linear-200 from-blue to-purple/50"
          />
          <ServiceCard
            icon="ri:cloud-line"
            title="DevOps"
            description="If you need to manage your development operations, I can help you in the cloud your project uses."
            backgroundClassName="bg-white/20 group-hover:bg-linear-200 from-blue to-purple/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
