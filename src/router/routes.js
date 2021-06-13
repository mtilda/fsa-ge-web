import NotFoundPage from '../pages/404.js';
import LandingPage from '../pages/Landing';
import InstitutionDetailPage from '../pages/InstitutionDetail.js';
import InstitutionSearchPage from '../pages/InstitutionSearch.js';
import ProgramDetailPage from '../pages/ProgramDetail.js';
import ProgramSearchPage from '../pages/ProgramSearch.js';

const routes = [
  {
    linkText: 'Home',
    key: 'landing',
    path: '/',
    exact: true,
    Component: LandingPage,
  },
  {
    linkText: 'Search for Institutions',
    key: 'institution-search',
    path: '/institutions',
    exact: true,
    Component: InstitutionSearchPage,
  },
  {
    key: 'institution-detail',
    path: '/institutions',
    Component: InstitutionDetailPage,
  },
  {
    linkText: 'Search for Programs',
    key: 'program-search',
    path: '/programs',
    exact: true,
    Component: ProgramSearchPage,
  },
  {
    key: 'program-detail',
    path: '/programs',
    Component: ProgramDetailPage,
  },
  {
    key: 'notfound',
    path: '*',
    exact: false,
    Component: NotFoundPage,
  }
];

export default routes;