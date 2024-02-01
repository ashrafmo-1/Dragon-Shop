"use client"
import React, {useState} from 'react';
import './globals.css'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import dynamic from "next/dynamic"
import Image from 'next/image'
import toggle from "./assets/list.png"
import {Roboto} from '@next/font/google';

const roboto = Roboto({
    subsets: ["latin"],
    weight: ['300', '400', '500', '700', '900']
});


// navgation bar dinamic call by cleint side
const DinamicBtn = dynamic(() => import("../loignBtn/loginbtn"), {
    ssr: false,
})

const Nav = () => {
    const [active, setactive] = useState(false);
    const handelClick = () => {
        setactive(!active);
    }
    return (
        <Navbar sticky='top' expand="lg" className="bg-dark" style={{zIndex: '99999'}}>
            <Container className={roboto.className}>
                <Link href="/" className='navbar-brand fw-bold fs-1'>Dragon_Store</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavBar className="me-auto gap-3">
                        <Link href="/" className='nav-link text-white'>Home</Link>
                        <Link href="/" className='nav-link text-white'>Link</Link>
                        <div className='nav-link allCategoris text-white d-flex justify-content-center align-items-center gap-1' id={active ? 'active' : ''} onClick={handelClick}>
                            <Image  style={{cursor: 'pointer'}} src={toggle} width={12} height={12} alt='' />
                            <span style={{cursor: 'pointer'}}>All category</span>
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
                    </NavBar>
                    <DinamicBtn />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nav