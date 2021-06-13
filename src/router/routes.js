import LandingPage from '../pages/Landing';
import NotFoundPage from '../pages/404.js';

const routes = [
  {
    key: 'landing',
    path: '/',
    exact: true,
    Component: LandingPage,
  },
  {
    key: 'notfound',
    path: '*',
    exact: false,
    Component: NotFoundPage,
  }
];

export default routes;