## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## About The Project

This Project is a simple REST API to learn how to create them and document them so they can be easly understood. The REST API is also connected to a MySQL database to make the data persistent.

### Built With
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)

Node Packages:
* [mysql, Node package for MySQL](https://www.npmjs.com/package/mysql)
* [morgan, Node package for Logging](https://www.npmjs.com/package/morgan)
* [express, Node package to actually create the API](https://www.npmjs.com/package/express)
* [body-parser, Node package to easly handle http bodys](https://www.npmjs.com/package/body-parser)
* [swagger-jsdoc, Node package to genereate swagger docs](https://www.npmjs.com/package/swagger-jsdoc)
* [swagger-ui-express, Node package to genereate swagger docs](https://www.npmjs.com/package/swagger-ui-express)

## Installation
1. Clone the repo.
```
git clone "https://github.com/LuciferUchiha/Node-rest-api.git"
```
2. Navigate into the clone folder.
```
cd Node-rest-api
```
3. Install all the dependencies
```
npm install
```

## Usage:
To start the Server run the app.js file. The server will run on the port 3003 if you dont change it. 
```
node app.js
```
Once the server is started you can access the Swagger documentation under
```
http://localhost:3003/api-docs/
```

## License

Distributed under the MIT License. See `LICENSE` for more information.
