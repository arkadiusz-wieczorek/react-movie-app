
![react-movie-app-logo](http://arkadiuseh.cluster017.ovh.net/react-movie-app/react-movie-app-logo.png)

<a href="http://arkadiuseh.cluster017.ovh.net/react-movie-app/">Online demo</a>



## Install

```
$ npm install
$ npm install -g browserify watchify

```

## Run example

```
$ npm run build
$ npm start
```
and go to <a href="http://localhost:8888">http://localhost:8888</a>
or just go to `build` directory and run `index.html` file in a web browser.

## Unconfigured environment

The browserify requires assigned `node` executable, because some linux distributions using `nodejs` executable instead of `node`. <a href="http://stackoverflow.com/a/20890795/6072815">This solution solves the problem</a>.

In case of problems with global packages installation like `npm install -g browserify watchify`:
- you can use `sudo`,
- set up environment to install packages without sudo by <a href="http://stackoverflow.com/a/25855403/6072815">this solution</a>,
- or use <a href="https://github.com/creationix/nvm">NVM</a>.

For development build please type `npm run build-dev`.

## Screenshots


### Desktop

![react-movie-app](http://arkadiuseh.cluster017.ovh.net/react-movie-app/react-movie-app.png)

### Mobile

![react-movie-app-mobile](http://arkadiuseh.cluster017.ovh.net/react-movie-app/react-movie-app-mobile.png)
