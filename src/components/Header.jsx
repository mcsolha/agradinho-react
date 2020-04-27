import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../router/routes';

function Header() {
  return (
    <ul>
      <li>
        <Link to={paths.LOGIN}>Login</Link>
      </li>
      <li>
        <Link to={paths.SIGNUP}>Sign Up</Link>
      </li>
    </ul>
  );
}

export default Header;
