"use client"
import "./globals.scss"
import React, {useState} from 'react';
import Link from 'next/link';
import dynamic from "next/dynamic";
import Image from 'next/image';
import toggle from "./assets/list.png";
import {Fascinate, Love_Light, Roboto} from '@next/font/google';

const roboto = Roboto({
    subsets: ["latin"],
    weight: ['300', '400', '500', '700', '900']
});

// navgation bar dinamic call by cleint side
const DinamicBtn = dynamic(() => import("../loignBtn/loginbtn"), {
    ssr: false,
});

const Nav = () => {

    const [active, setactive] = useState(false);
    const handelClick = () => {
        setactive(!active);
    };



    return (
        <section className={roboto}>
        <nav className="navgation-bar bg-dark d-flex align-items-center justify-content-around">
        <Link href="/" className='brand-name fw-bold fs-1'>dragon store</Link>
        <div className="links-toggle">
            <li> <Image className="btn-toggle-nav" onClick={handelClick} style={{cursor: 'pointer'}} src={toggle} width={32} height={20} alt='' /></li>
            <ul className="links d-flex align-items-center gap-5" id={active ? 'active' : ''}>
            <li> <Link href="/" className='nav-link text-white fs-5 fw-medium'>home</Link> </li>
            <li> <Link href="/aboutus" className='nav-link text-white fs-5 fw-medium'>about us</Link> </li>
            <li> <Link href="/features" className='nav-link text-white fs-5 fw-medium'>features</Link> </li>
            <div className='nav-link allCategoris text-white d-flex justify-content-center align-items-center gap-1'>
                <Image  style={{cursor: 'pointer'}} src={toggle} width={12} height={12} alt='' />
                <span style={{cursor: 'pointer'}} className='fw-medium fs-5'>categories</span>
                <div id='category'>
                    <Link className='categoryLink' href={'/'}>Clothes and wear</Link>
                    <Link className='categoryLink' href={'/'}>Computer and tech</Link>
                    <Link className='categoryLink' href={'/'}>Tools, equipments</Link>
                    <Link className='categoryLink' href={'/'}>Sports and outdoor</Link>
                    <Link className='categoryLink' href={'/'}>Animal and pets</Link>
                    <Link className='categoryLink' href={'/'}>Machinery tools</Link>
                    <Link className='categoryLink' href={'/'}>More category</Link>
                </div>
            </div>
            <li> <Link href="/contact" className='nav-link text-white fs-5 fw-medium'>contact me</Link> </li>
            </ul>
        </div>
            <DinamicBtn />
        </nav>
        </section>
    )
}
export default Nav

