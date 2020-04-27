import Login from '../components/Login';
import SignUp from '../components/SignUp';

export const paths = {
  LOGIN: '/login',
  SIGNUP: '/signup',
};

const routes = [
  {
    path: paths.LOGIN,
    component: Login,
  },
  {
    path: paths.SIGNUP,
    component: SignUp,
  },
];

export default routes;
