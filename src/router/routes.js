/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';

export const paths = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
};

const routes = [
  {
    path: paths.HOME,
    component: () => (<Home />),
    exact: true,
    meta: {
      authRequired: true,
    },
  },
  {
    path: paths.LOGIN,
    component: () => (<Login />),
  },
  {
    path: paths.SIGNUP,
    component: () => (<SignUp />),
  },
];

export default routes;
