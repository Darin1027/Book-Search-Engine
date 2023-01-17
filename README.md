# Book-Search-Engine

## Table of Contents

1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
5. [ Tests. ](#tests)
6. [ Questions. ](#questions)
7. [ Screenshots. ](#screenshots)
8. [ Contributors. ](#contributors)
9. [ Resources. ](#resources)
10. [ Links. ](#links)

## Description

- User Story

```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

- Acceptance Criteria

```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Installation

- Clone the repository using:

```
git clone git@github.com:Darin1027/Text-Editor.git
```

- Ensure you are in the current working directory
- Ensure all dependencies are installed as shown below installation instructions are below:

```
  "devDependencies": {
    "@babel/core": "^7.15.0",
    "@babel/plugin-transform-runtime": "^7.15.0",
    "@babel/preset-env": "^7.15.0",
    "@babel/runtime": "^7.15.3",
    "babel-loader": "^8.2.2",
    "css-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.2",
    "http-server": "^0.11.1",
    "style-loader": "^3.2.1",
    "webpack": "^5.51.1",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^4.0.0",
    "webpack-pwa-manifest": "^4.3.0",
    "workbox-webpack-plugin": "^6.2.4"
  },
  "dependencies": {
    "code-mirror-themes": "^1.0.0",
    "idb": "^6.1.2"
  }
}

```

Run the below scripts in your root directory `package.json` file

```
  "scripts": {
    "start:dev": "concurrently \"cd client && npm run build\" \"cd server && npm run server\" ",
    "start": "npm run build && cd server && node server.js",
    "server": "cd server nodemon server.js --ignore client",
    "build": "cd client && npm build",
    "install": "cd client && npm install",
    "client": "cd client && npm start"
  },
```

Run the following command to install all packages

```
npm i
```

## Usage

- Ensure all depencies and above steps are fulfilled
- Navigate to the working directory and open a terminal and run the below command

- Navigate to the working directory in the terminal and run the below to start the application

```
npm run start
```

## License

- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```
MIT License

Copyright (c) 2022 Holiday-Wishlist-App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

- https://opensource.org/licenses/MIT

## Tests

- N/A

## Screenshots

![Photo ex.1](./images/Screenshot%202023-01-14%20052305.png)

## Contributors

- Darin Palombo [dplb1027@gmail.com]

## Questions

Want to see more of my work?

- [Github Link](https://github.com/Darin1027)
  <br/>

## Contact Me

dplb1027@gmail.com

## Links

- [Github Link](https://github.com/Darin1027/Text-Editor)
- [Deployed App Link](https://sheltered-earth-99345.herokuapp.com/)

## Resources

- https://www.npmjs.com/package/mongoose
- https://www.tutorialspoint.com/mongodb/index.htm

* https://www.npmjs.com/package/dotenv
* https://www.npmjs.com/package/express
