"use client"
import "./globals.scss"
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toggle from "./assets/list.png";

const SecondNav = () => {
  const [active, setactive] = useState(false);
  const handelClick = () => {
      setactive(!active);
      console.log(active);
  };
  return (
    <section className="navgation_bar py-3">
    <div id="container">
    <div className="nav_header d-flex justify-content-between align-items-center">
        <Link href={"/"} className="brand_title text-decoration-none"><h1>dragon store</h1></Link>
        <div className="toggleBtn" onClick={handelClick}><Image src={toggle} width={30} height={20} alt="toggle" /></div>
    </div>
        <div className="links_and_controls my-2 d-flex justify-content-between align-items-center" id={active ? 'active' : ''} >
            <div className="links d-flex gap-4">
                <li> <Link href="/" className='nav-link text-white fs-5 fw-medium'>home</Link> </li>
                <li> <Link href="/aboutus" className='nav-link text-white fs-5 fw-medium'>about us</Link> </li>
                <li> <Link href="/features" className='nav-link text-white fs-5 fw-medium'>features</Link> </li>
                <li> <Link href="/products" className='nav-link text-white fs-5 fw-medium'>products</Link> </li>
                <li> <Link href="/contact" className='nav-link text-white fs-5 fw-medium'>contact me</Link> </li>
                <li> <Link href="/catigory" className='nav-link text-white fs-5 fw-medium'>categories</Link> </li>
            </div>
        </div>
    </div>
</section>
  )
}

export default SecondNav