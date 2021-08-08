import { lazy } from 'react';

const routes = [
  {
    path: '/herz/',
    element: lazy(() => import('@/pages/home')),
  },
];

export default routes;
