---
title: Donation Management Web App
linkUrl: 'https://donately.com/'
tags:
  - 550220c5-0c8c-488e-a05f-bf4d6515db39
  - 477513a2-578a-4e61-9cb9-4140a01458e9
  - 8778ba31-cd88-48c9-b032-9e9eeb1d590e
imageUrl: /donately_thumb.jpg
---

![Overview](/donately.jpg)

I took part on the development of a Donation manager web app called Donately, which allows users to handle payment processing, information, and provides a dashboard to handle campaigns and notifications for donators. Donately is a humanitarian non-profit organization.

The application is made in React and uses Redux, TailWindCSS and custom WebPack configuration under-the-hood.

My tasks were principally optimize the performance of front end alleviating some of the requests being sent to the backend. When I first analyzed the web application, the loading times and TTI (Time To Interactive) were not so great because it loaded repeated information even though it used a store in Redux for maintaining the sate of the application. What I did for them was also optimizing the loading times by decreasing the initial bundle of the React application to a more lightweight one while maintaining the performance at my priority.

I used a library called Redux-Thunk to solve this issue. It offers a way to dispatch asynchronous actions using the Redux store by creating actions through functions. Also a caching mechanism was used to invalidate the data after certain minutes so the data would be refreshed timely. By detecting the issue here I needed to make major changes to the action dispatchers, some of the Containers and also Components for having a placeholder while the data was being loaded.

The other thing I mentioned for optimizing the application was reducing the initial bundle size by implementing code splitting and lazy loaded components by implementing React Suspense. It helped to reduce the initial loading from the original 10 seconds to only 2, as it only loaded the components that were required instead of having all the bundle available at the beginning.
