import React from 'react';
import ServiceCard from './service-card';

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
            className="border-blue-500 hover:bg-blue-500"
            iconContainerClassName="bg-blue-500 group-hover:text-blue-500"
          />
          <ServiceCard
            icon="ri:server-line"
            title="Back End"
            description="Using modern technologies and used frameworks such as Django, ASP.NET, Spring Framework, Express, Nest.js, Ruby on Rails. If you have another option, we can discuss it."
            className="border-orange-500 hover:bg-orange-500"
            iconContainerClassName="bg-orange-500 group-hover:text-orange-500"
          />
          <ServiceCard
            icon="ri:global-line"
            title="REST API Development"
            description="Integrating, implementing REST APIs with your selected technology. Optimization of existing code for performance (in time and memory)."
            className="border-green-500 hover:bg-green-500"
            iconContainerClassName="bg-green-500 group-hover:text-green-500"
          />
          <ServiceCard
            icon="ri:database-2-line"
            title="Database Administration and Development"
            description="From making performant queries to database schema migrations. I can also work with ETL tasks."
            className="border-red-500 hover:bg-red-500"
            iconContainerClassName="bg-red-500 group-hover:text-red-500"
          />
          <ServiceCard
            icon="ri:pie-chart-line"
            title="Data Mining and Processing"
            description="Integrate business logic into data processing from different sources, such as APIs and dynamic websites."
            className="border-purple-500 hover:bg-purple-500"
            iconContainerClassName="bg-purple-500 group-hover:text-purple-500"
          />
          <ServiceCard
            icon="ri:cloud-line"
            title="DevOps"
            description="If you need to manage your development operations, I can help you in the cloud your project uses."
            className="border-indigo-500 hover:bg-indigo-500"
            iconContainerClassName="bg-indigo-500 group-hover:text-indigo-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
