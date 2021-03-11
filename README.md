# react-js-crash-course
Implementing what has been taught in [React JS Crash Course 2021](https://www.youtube.com/watch?v=w7ejDZ8SWv8) course

## Instructions

1. Create a new app using create-react-app
2. implement a header component by creating a new file called Header.js
3. In the new file type `rafce` and that will create a new arrow function component

## Preparing a production build

`npm run build` will create a ./build folder with the static assets which is what you actually deploy
`npm install -g serv` to install a basic http server
`serve -s build` to deploy the assets from the build folder and will serve on port 5000
* [Docs on production builds](https://create-react-app.dev/docs/deployment/)
* The React Dev Tools extension will also show that 'This page is using the production build of React. ✅'