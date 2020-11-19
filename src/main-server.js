import buildApp from './app';

export default function () {
  const { router, app } = buildApp();

  return { app, router };
}
