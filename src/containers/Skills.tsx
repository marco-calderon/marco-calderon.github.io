import React from 'react';

const Skills = () => {
  return (
    <section id="skills" data-aos="fade-up">
      <div
        className="w-full px-20 mx-auto md:w-3/4 xl:w-2/3"
        data-aos-delay="200"
      >
        <div className="row">
          <div className="col-12">
            <header className="flex flex-col items-center mb-5 w-full">
              <p className="text-4xl ">Skills</p>
            </header>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Languages</h5>
          </div>
          <div className="mb-2">
            <p>
              Javascript, TypeScript, Python, HTML5, CSS3, Sass/Less, Swift, C#,
              Java, C, C++, Ruby, SQL, T-SQL.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Front End / Mobile</h5>
          </div>
          <div className="mb-2">
            <p>
              React, Next.js, Vue, Angular 2+, Bootstrap 3/4/5,
              HTML5/CSS3/JavaScript, jQuery, Flutter, SwiftUI, Ionic Framework,
              React Native, Tailwind CSS, Material UI, Emotion,
              styled-components
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Frameworks</h5>
          </div>
          <div className="mb-2">
            <p>
              Django, Node.js, Nest.js, Next.js, Express.js, ASP.NET Core,
              ASP.NET, Spring Framework, Electron, Prisma.js, Framer motion
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Automation tools and testing</h5>
          </div>
          <div className="mb-2">
            <p>Jest, Playwright, Puppeteer, Selenium IDE</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Libraries / APIs</h5>
          </div>
          <div className="mb-2">
            <p>
              Redux, NgRx, RxJs, Nest.js, MapBox, GraphQL, OpenLayers, Chart.js,
              Pusher, S3, EC2, WebSockets, PayPal, Stripe, Pisma.js, Framer
              motion
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Services</h5>
          </div>
          <div className="mb-2">
            <p>
              Heroku, AWS, Digital Ocean, Vercel, Firebase, Serverless,
              Cloudinary, Auth0
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Storage</h5>
          </div>
          <div className="mb-2">
            <p>MySQL, SQL Server, PostgreSQL, MongoDB, Redis, CouchDB</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Paradigms</h5>
          </div>
          <div className="mb-2">
            <p>
              Model View Controller, MVVM, Object Oriented Programming, Agile
              Software development, Functional Programming, Test Driven
              Development, REST, Monorepo
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Tools</h5>
          </div>
          <div className="mb-2">
            <p>
              Git, Nginx, GUnicorn, Linux, Subversion, Visual Studio, Visual
              Studio Code, GitHub, GitLab, Bitbucket, Jira, Trello, Slack,
              Asana, Notion
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Platforms</h5>
          </div>
          <div className="mb-2">
            <p>Windows, Linux, macOs, iOS, Docker, Kubernetes</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-2 md:grid-cols-2">
          <div className="">
            <h5 className="text-xl">Other</h5>
          </div>
          <div className="mb-2">
            <p>Bash scripting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
