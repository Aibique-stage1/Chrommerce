import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
