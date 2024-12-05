import { lazy } from 'react';

import { Loadable } from '@src/components';
import { PATH_AUTH, PATH_MAIN, ROOT_AUTH } from '@src/constants/index';
import { AuthPage } from '@src/pages/auth';

import { AuthLayoutGuard } from './layout';
import GuestGuard from './layout/Auth/GuestGuard';
import ProfileLayoutGuard from './layout/User';

const Page404 = Loadable(lazy(() => import('src/pages/common/error404')));
const HomePage = Loadable(lazy(() => import('src/pages/home/HomePage')));
const MoviePage = Loadable(lazy(() => import('src/pages/movie/MoviePage')));

const MainRoutes = {
  path: PATH_MAIN.ROOT,
  element: <GuestGuard />,
  children: [
    {
      path: PATH_MAIN.ROOT,
      element: <ProfileLayoutGuard />,
      children: [
        {
          path: PATH_MAIN.ROOT,
          element: <HomePage />,
        },
        {
          path: PATH_MAIN.MOVIE,
          element: <MoviePage />,
        },
        {
          path: PATH_MAIN.MOVIE_ID,
          element: <MoviePage />,
        },
      ],
    },
    {
      path: ROOT_AUTH,
      element: <AuthLayoutGuard />,
      children: [
        {
          path: ROOT_AUTH,
          element: <AuthPage variant="/login" />,
        },
        {
          path: PATH_AUTH.LOGIN,
          element: <AuthPage variant="/login" />,
        },
        {
          path: PATH_AUTH.REGISTER,
          element: <AuthPage variant="/register" />,
        },
      ],
    },

    { path: '*', element: <Page404 /> },
  ],
};

export default MainRoutes;
