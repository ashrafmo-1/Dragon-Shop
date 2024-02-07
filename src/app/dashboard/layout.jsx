import React, { Children } from 'react';
import Link from 'next/link';
import './globals.css';
import {Roboto} from '@next/font/google';
import Image from "next/image"
import Home from "./assets/home.png"
import Productmanagement from "./assets/productmanagement.png"
import Newproduct from './assets/add_11433316.png'
import Productedit from "./assets/settings_11550010.png"
import Users from "./assets/team_476863.png"
import Newuser from "./assets/circle_14025183.png"
import Admins from "./assets/man_14046875.png"
import Toggle from "./assets/toggle.png"

export const metadata = {
  title: 'dashboard',
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900']
});


const layout = ({children}) => {
  return (
    <div className={roboto.className}>
        <section className='w-100 d-flex'>
          <div className="sideBar">
            <div className='sticky-top d-flex flex-column gap-2 p-4 px-4'>
                <h3 className='title fs-1'>dragon store</h3>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/dashboard'}> <Image src={Home} width={15} height={15} alt='img' /> home</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/dashboard/productmanagement'}> <Image src={Productmanagement} width={15} height={15} alt='img' /> products management</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/dashboard/addnewproduct'}> <Image src={Newproduct} width={15} height={15} alt='img' /> add new product</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/'}> <Image src={Productedit} width={15} height={15} alt='img' /> product edit</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/dashboard/showusers'}> <Image src={Users} width={15} height={15} alt='img' /> users management</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/'}> <Image src={Newuser} width={15} height={15} alt='img' /> add new user</Link>
                <Link className='px-2 link text-decoration-none fs-3 py-2 fw-medium' href={'/'}> <Image src={Admins} width={15} height={15} alt='img' /> admins</Link>
            </div>
          </div>
          <div className='dashboard-content'>
            <div className='dashboaed-nav d-flex align-items-center gap-5 px-3 py-2'>
              <button className='toggle_side_bar'><Image src={Toggle} width={30} height={30} alt='toggle bar' /></button>
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