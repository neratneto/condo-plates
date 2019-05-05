# Car management for condos

Authorized cars management aid for condominium doormans.
> Built with [Nuxt.js](https://nuxtjs.org), [Vuetify](https://vuetifyjs.com) and [Firebase Firestore](https://firebase.google.com)


## Seeting up environment variables

> Create an `envSettings.js` file on the root directory

> Include the following code with your variables on the file
```
const Env = {
  firebase: {
    apiKey: 'XXX',
    authDomain: 'XXX',
    databaseURL: 'XXX',
    projectId: 'XXX',
    storageBucket: 'XXX',
    messagingSenderId: 'XXX',
    appId: 'XXX'
  }
}

export default Env
global.Env = Env
```

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
