import React from 'react';
import Nav from '../components/navgationbar/Nav';
import './globals.scss';

export const metadata = {
    title: 'products',
    description: 'can you get alot of products here and show all product',
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
