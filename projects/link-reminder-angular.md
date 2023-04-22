---
title: Set me
---

![Overview](/link-reminder/1.jpg)

An application made for people who likes to share links for oneself and constantly changes its focus from computer to other devices. It allows to see in real time the links that are being shared to oneself and can be opened right away.
						
It offers secure login, easy configuration and no hussle for links - just share them and open them, no more. Simplicity for the task.
						
The application was made for Angular as the frontend and a Node.js service as the backend, developed in the Nest.js technology. This allows for a easy deployment to serverless or server contexts and work performantly. The frontend consists of custom components and integration of Pusher API for real time notifications, JWT as the secure layer for users, and it allows updating and deleting links on the fly with the communication through a REST API.
						
The Node.js backend offers the point of communication and JWT handling to ensure data consistency and privacy of user’s data, filtering and handling the real time communication with the same Pusher API. The persistence layer is provided by it and a connection to a MongoDB instance that stores users information encrypted and their links. The Nest.js also offers typed capabilities with the TypeScript superset of Javascript.

![Secondary](/link-reminder/2.jpg)

As the scope of the project was the simplicity, the API only offers the neccessary - add, update, delete links. The Pusher API serves as the real time message broker that only shares the important information of the links, such as the date it was created, tags, and the creator. While it wasn’t provided by this service, the backend manages groups that ensures that only the user that sends the link receives it, similar to a tenant based SaaS solution. This way it can be implemented groups in the future for sharing links between users.
							
The backend also manages a screenshot component that opens the link with Puppeteer library and renders the website for taking a snapshot of the link, so it will be present in the link after a couple of minutes. The image is stored in a Cloudinary instance but it can be swaped out to a S3 bucket if neccessary. The reference to the taken screenshot is saved then to the MongoDB entry that was created for the link.

```
  import * as puppeteer from 'puppeteer-core';
  import * as chrome from 'chrome-aws-lambda';

  @Injectable()
  export class LinksService {

    async takeScreenshot(url: string) {
      const executablePath = await chrome.executablePath;
      const browser = await puppeteer.launch({
        args: chrome.args,
        executablePath,
        headless: chrome.headless,
      });
      const page = await browser.newPage();
      await page.goto(url);
      await page.setViewport({ width: 800, height: 600 });
      const img = await page.screenshot({ encoding: 'base64' });

      await browser.close();
      return 'data:image/png;base64,' + img;
    }
  }
```

The above screenshot shows the code for the service that takes the screenshot. As you see, this is very similar to what an Angular Service will look like - with the difference that this runs on a Node.js environment and thus can execute functionality of backend. This is why Nest.js is my preferred framework to use when I have to develop a Node.js application, because it offers all the benefits of TypeScript, can run Express, Fastify or another server with it, and of course it provides a very clean sepparation of concerns while having all the code splitted in their respective places. And the best of all - you can run it on a serverless environment or a server one, it will be executed with minimal configuration changes.
							
This service runs on Vercel, a platform that allows developers to upload their applications (with a Node.js backend in this case) and have it work on AWS Lambda service. It will handle all the service management to the platform and one can focus on develop instead of doing somewhat complicated DevOps.

![Third](/link-reminder/3.jpg)
							
The main challenge of this application was to maintain the security while having it simple. Some libraries are installed to manage the encryption part and the data consistency business logic, but the code to be executed needed to remain very short as it is intended to run on a serverless environment in which the execution time is the metric that we need to minimize to maintain the costs affordable.
							
With the usage of Angular and Nest.js this also has the benefit of being testable and scalable. I couldn’t recommend using this combination more for applications that we know beforehand that will have changes and features that are not planned.