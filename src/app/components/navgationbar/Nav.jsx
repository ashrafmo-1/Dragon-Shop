"use client"
import React, {useState} from 'react';
import './globals.css';
import Link from 'next/link';
import dynamic from "next/dynamic";
import Image from 'next/image';
import toggle from "./assets/list.png";
import {Roboto} from '@next/font/google';

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
        <section className={roboto.className}>
        <nav className="navgation-bar bg-dark d-flex align-items-center justify-content-around">
        <Link href="/" className='brand-name fw-bold fs-1'>dragon store</Link>
            <ul className="links d-flex align-items-center justify-content-center gap-5">
                <li> <Link href="/" className='nav-link text-white fs-5 fw-medium'>Home</Link> </li>
                <li> <Link href="/" className='nav-link text-white fs-5 fw-medium'>about us</Link> </li>
                <li> <Link href="/" className='nav-link text-white fs-5 fw-medium'>Link</Link> </li>
                <div className='nav-link allCategoris text-white d-flex justify-content-center align-items-center gap-1' id={active ? 'active' : ''} onClick={handelClick}>
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
                <li> <Link href="/" className='nav-link text-white fs-5 fw-medium'>contact</Link> </li>
                <li><Link href={'/dashboard'} className='btn btn-outline-danger'> DASHBOARD </Link></li>
            </ul>
            <DinamicBtn />
        </nav>
        </section>
    )
}

export default Nav