import React from 'react'
import './globals.css'
import Image from 'next/image'
import styleLeft from './register.png'
import { Container } from 'react-bootstrap'

const Register = (): any => {
    return (
        <div className='register-page'>
            <Container>
                <div className='w-100 d-flex justify-align-content align-items-center gap-5'>
                    <form action="" className='form w-50 d-flex justify-content-center align-items-center flex-column gap-3'>
                        <h1 className='text-center mb-5'>Please Fill out form to Register!</h1>
                        <label className='d-flex flex-column'>
                            <label className='inputInfo' htmlFor="">username:</label>
                            <input className='imput' type="text" name="" id="" />
                        </label>
                        <label className='d-flex flex-column'>
                            <label className='inputInfo' htmlFor="">email:</label>
                            <input className='imput' type="text" name="" id="" />
                        </label>
                        <label className='d-flex flex-column'>
                            <label className='inputInfo' htmlFor="">password</label>
                            <input className='imput' type="text" name="" id="" />
                        </label>
                        <label className='d-flex flex-column'>
                            <label className='inputInfo' htmlFor="">confirm password:</label>
                            <input className='imput' type="text" name="" id="" />
                        </label>
                        <button className='submit'>Register</button>
                    </form>
                    <div className="style w-50 d-flex justify-content-center align-content-center">
                        <Image src={styleLeft} width={500} height={520} className='img' alt="style image only" />
                        <div className='bgColor'></div>
                        <div className='bgColor2'></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Register