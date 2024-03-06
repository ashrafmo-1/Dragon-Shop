import React from 'react';
import Nav from '../components/navgationbar/Nav';
import './globals.scss';

export const metadata = {
    title: 'products',
};

const Layout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
