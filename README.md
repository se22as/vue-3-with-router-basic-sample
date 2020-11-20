# vue-3-basic-sample-app
This example app takes the application from https://github.com/moduslabs/vue3-example-ssr which has 
router and a non singleton vuex and simplifies it to just have a router.

This branch of the repos has SSR rendering added, see the video https://www.youtube.com/watch?v=XJfaAkvLXyU&feature=youtu.be
that this code is based on, and its repos https://github.com/moduslabs/vue3-example-ssr

This branch also has the Vuex change merged in.
Followed the instructions on https://blog.logrocket.com/using-vuex-4-with-vue-3/
and information on https://blog.logrocket.com/refactoring-your-vue-2-apps-to-vue-3/

This branch should demonstrate how to have Vuex and Routing in a SSR Vue 3 app.

## Project setup
```
npm install
```

### Compile Client Side Rendered (CSR) App 
```
npm run buildcsr
```

### Run client Side Rendered (CSR) App 
```
npm run startcsr
```


### Compile Server Side Rendered (CSR) App 
```
npm run build
```

### Run Server Side Rendered (CSR) App 
```
npm run start
```