"use client"
import React from 'react'
import './globals.css'
import Image from 'next/image'
import styleLeft from './register.png'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [accept, setAccept] = useState(false);
    const [emailError, setemailError] = useState("")

    async function Submit(ele) {
        let flag = true;
        ele.preventDefault();
        setAccept(true);
        name === "" || password.length < 4 || confirmpass !== password ? (flag = false) : (flag = true);

        try {
            if (flag) {
                let response = await fetch("http://127.0.0.1:8000/api/register", {
                    method: "post",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        password_confirmation: confirmpass,
                    })
                });
                if(response.status === 200) {
                    window.localStorage.setItem('email', email);
                    window.location.pathname = '/';
                }
            }
        } catch(error) {
            setemailError(error.response.status);
        }
    }

    return (
        <div className='register-page'>
            <Container>
                <div className='w-100 d-flex justify-align-content align-items-center gap-5'>
                    <form className='form w-50 d-flex justify-content-center align-items-center flex-column gap-3' onSubmit={Submit}>
                        <h1 className='text-center mb-5 mt-4'>Please Fill out form to Register!</h1>
                        <label className='d-flex flex-column'>
                            <span className='inputInfo'>username:</span>
                            <input className='imput' type="text" name="" id="" onChange={(ele) => {setName(ele.target.value)}} />
                            {name === "" && accept && <p className='error'>user name is required.!</p>}
                        </label>
                        <label className='d-flex flex-column'>
                            <span className='inputInfo' >email:</span>
                            <input className='imput' type="email" name="" id="" required onChange={(ele) => {setEmail(ele.target.value)}} />
                            {accept === true || emailError === 422 ? (<p className='error'> email is Already been taken.!</p>) : null}
                            {email === "" ? (<p className='error'>must type your email</p>) : null}
                        </label>
                        <label className='d-flex flex-column'>
                            <span className='inputInfo' >password</span>
                            <input className='imput' type="password" name="" id="" onChange={(ele) => {setPassword(ele.target.value)}} />
                            {password.length < 4 && accept && <p className='error'>Password must be more than 12 char</p>}
                        </label>
                        <label className='d-flex flex-column'>
                            <span className='inputInfo' >confirm password:</span>
                            <input className='imput' type="password" name="" id="" onChange={(ele) => {setConfirmpass(ele.target.value)}} />
                            {confirmpass !== password && accept && <p className='error'>Password does not match</p>}
                        </label>
                        <button className='submit'>Register</button>
                        <div>yes i have an account? <Link href={'/login'}>login</Link></div>
                        <div>dashboard control <Link href={'/dashboard'}>dashboard</Link></div>
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