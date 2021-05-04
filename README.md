# http-cache

## Description

TODO: update description

## Local Setup

Clone this repository to your local drive:

```
$ git clone https://github.com/yuanshingk/http-cache.git
```

Install all dependencies:

```
$ npm install
```

### Starting the Node Server

This application uses [Express](https://expressjs.com/) as framework.
Start application with **nodemon** using the following command:

```
$ npm run serve
```

Application is serving at port `30001`. Browse to http://localhost:30001.

### Auto browser refresh

To enable auto refresh in browser, run the follow command:

```
$ npm run ui
```

Auto browser refresh is serving at port `30002`. Browse to http://localhost:30002.

### Pug

This project uses [PugJs](https://pugjs.org/api/getting-started.html) as html templating engine. It is integrated with NodeJs Express as view engine.
In addition to that, the ui pages are also designed to act like a SPA. A copy of the transformed static files are available in `/src/public` folder.

Install [pug-cli](https://github.com/pugjs/pug-cli):

```
$ npm install pug-cli -g
```

To watch for changes on pug files during development and generate static html on the fly into `src/public` folder, run:

```
$ npm run pug-watch
```

### Docs

To generate static html into `docs` folder for Github Pages, run before commiting code:

```
$ npm run docs-output
```

### Full development mode

For best development experience, run:

```
$ npm run dev
```

This will serve up the application, enable auto browser refresh, and also output static html to `public` folder on the fly.
