import React, { Children } from 'react';
import Link from 'next/link';
import './globals.css';
import { Metadata } from 'next';
import {Roboto} from '@next/font/google';

export const metadata: Metadata = {
  title: 'dashboard',
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900']
});


const layout = ({children}: any) => {
  return (
    <div className={roboto.className}>
        <section className='w-100 d-flex'>
          <div className="sideBar">
            <div className='sticky-top d-flex flex-column gap-2 p-4 px-4'>
                <h3 className='title fs-1'>dragon store</h3>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/dashboard'}> <img src={""} alt='' /> home</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/dashboard/productmanagement'}> <img src={""} /> products management</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/'}>add new product</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/'}>product edit</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/'}>users management</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/'}>add new user</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/'}>admins</Link>
            </div>
          </div>
          <div className='dashboard-content'>
            <div className='dashboaed-nav d-flex align-items-center gap-5 px-3 py-2'>
              <h2 className='nav-title fs-1'>dashboard</h2>
              <span className='status-nav'>link shortner is live now</span>
            </div>
            {children}
          </div>
      </section>
    </div>
  )
}

export default layout