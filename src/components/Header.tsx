import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <>
      <span>
        <Link to="/">Chrommerce</Link>
      </span>
      <div>
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
      </div>
    </>
  );
};

export default Header;
