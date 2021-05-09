# http-cache

Github page: https://yuanshingk.github.io/http-cache/

![Docker Publish](https://github.com/yuanshingk/http-cache/actions/workflows/main.yml/badge.svg)

## Local Startup

Clone this repository to your local drive:

```
$ git clone https://github.com/yuanshingk/http-cache.git
```

Install all dependencies:

```
$ npm install
```

Start the application:

```
$ npm run start
```

Browse to http://localhost:30001.

## Local Development

### Starting in Monitoring Mode

This application uses [Express](https://expressjs.com/) as framework.
Start application with **nodemon** using the following command:

```
$ npm run start-mon
```

Application is serving at port `30001`. Browse to http://localhost:30001. The debugging port is at `30002`.
To attach debugger, simply debug with configuration `Attach Node Debugger` defined in `/.vscode/launch.json`.

### Auto Browser Refresh

To enable auto refresh in browser, run the follow command:

```
$ npm run ui
```

Auto browser refresh is serving at port `30003`. Use http://localhost:30003 which will automatically refresh itself in the browser after changes are made in your code.

### Full Development Mode

For best development experience, run:

```
$ npm run dev
```

This will serve up the application in monitoring mode and enable auto browser refresh.

## GitHub Pages

This project uses [PugJs](https://pugjs.org/api/getting-started.html) as html templating engine. It is integrated with NodeJs Express as view engine.
The static files it references are available in `/src/public` folder.

Github pages is hosted under `/docs` folder. To generate the SPA static page, we need to install [pug-cli](https://github.com/pugjs/pug-cli):

```
$ npm install pug-cli -g
```

Run the following before commiting code:

```
$ npm run docs-output
```

## Running in Docker

You can choose to run this application using docker.
Build the docker image:

```
$ docker build -t http-cache .
```

Run the image:

```
$ docker run -it -p 8080:8080 http-cache
```

Browse to http://localhost:8080.
