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
9. [Technology](#technology)
10. [ Resources. ](#resources)

## Description

- User Story

```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

- Acceptance Criteria

```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Installation

- Clone the repository using:

```
git clone git@github.com:Darin1027/Book-Search-Engine.git
```

- Ensure scripts are exactly as shown below:
- Ensure all dependencies are installed as shown below:

- root `package.json` file:

```
  "scripts": {
    "start": "node server/server.js",
    "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
    "install": "cd server && npm i && cd ../client && npm i",
    "build": "cd client && npm run build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^5.1.0"
  },
  "dependencies": {
    "mongodb": "^4.13.0"
  }
}

```

- Ensure scripts are exactly as shown below:
- Ensure all dependencies are installed as shown below:

- server `package.json` file:

```
  "scripts": {
    "start": "node server.js",
    "watch": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^4.0.1",
    "jsonwebtoken": "^8.5.1",
    "apollo-server-express": "^3.6.2",
    "express": "^4.17.2",
    "graphql": "^16.3.0",
    "mongoose": "^6.1.8"
  },
  "devDependencies": {
    "nodemon": "^2.0.3"
  }
}
```

- Ensure scripts are exactly as shown below:
- Ensure all dependencies are installed as shown below:

- client `package.json` file:

```
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:3001",
  "dependencies": {
    "@apollo/client": "^3.7.4",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "bootstrap": "^4.4.1",
    "graphql": "^16.6.0",
    "jwt-decode": "^2.2.0",
    "react": "^16.13.1",
    "react-bootstrap": "^1.0.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^6.2.1",
    "react-scripts": "^4.0.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

## Usage

- Ensure you are in your desired directory `root`, `server`, or client`
- Run the corresponding Script from your `package.json` file in your terminal.

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

- [Github Link](https://github.com/Darin1027/Book-Search-Engine)
- [Deployed App Link]()

## Technology

Project is created with:

- MongoDB
- Express.js
- React.js
- Node.js
- GraphQL
- JWT Authentication
- Bcrypt.js
- GraphQL
- Apollo

## Resources

- https://www.mongodb.com/docs/
- https://www.tutorialspoint.com/mongodb/index.htm
- https://www.npmjs.com/package/express
- https://reactjs.org/
- https://nodejs.org/en/docs/
- https://jwt-auth.readthedocs.io/en/develop/
- https://getbootstrap.com/
- https://www.npmjs.com/package/bcrypt
- https://graphql.org/
- https://apollographql-jp.com/