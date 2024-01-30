// "use client"
// import React { useState } from "next"


import './globals.css'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import LoginImage from './Other 03.png'

const page = () => {

  

  return (
    <div className='login-page'>
    <Container>
        <div className='w-100 d-flex justify-align-content align-items-center gap-5'>
            <div className="style w-50 d-flex justify-content-center align-content-center">
                <Image src={LoginImage} width={500} height={520} className='img' alt="style image only" />
                <div className='bgColor'></div>
            </div>
            <form action="" className='form w-50 d-flex justify-content-center align-items-center flex-column gap-3'>
                <h1 className='text-center mb-5 mt-4'>Welcome Back!</h1>
                <label className='d-flex flex-column'>
                    <label className='inputInfo' htmlFor="">email:</label>
                    <input className='imput' type="email" name="" id="" />
                </label>
                <label className='d-flex flex-column'>
                    <label className='inputInfo' htmlFor="">login</label>
                    <input className='imput' type="password" name="" id="" />
                </label>
                <button className='submit'>login</button>
                <div>Dont  have and account? <Link href={'/register'}>Register</Link></div>
                <div className='BGCOLOR'></div>
            </form>
        </div>
    </Container>
</div>
  )
}

export default page