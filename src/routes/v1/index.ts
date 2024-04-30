import express from 'express';
import authRoute from './auth.route';
import docsRoute from './docs.route';
import bookRoute from './book.route';
import themeRoute from './theme.route';
import avatarRoute from './avatar.route';

const router = express.Router();

const defaultRoutes = [
  // {
  //   path: '/auth',
  //   route: authRoute
  // },
  {
    path: '/avatars',
    route: avatarRoute
  },
  {
    path: '/books',
    route: bookRoute
  },
  {
    path: '/themes',
    route: themeRoute
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
devRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
// }

export default router;
