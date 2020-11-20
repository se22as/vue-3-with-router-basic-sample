import buildApp from './app';

export default (url) => new Promise((resolve, reject) => {
  const { router, app, store } = buildApp();

  // set server-side router's location
  router.push(url);

  router.isReady()
    .then(() => {
      const matchedComponents = router.currentRoute.value.matched;
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        return reject(new Error('404'));
      }

      // the Promise should resolve to the app instance so it can be rendered
      return resolve({ app, router, store });
    }).catch(() => reject);
});
