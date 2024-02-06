"use client"
import React, {useState} from 'react';
import './globals.css';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import LoginImage from './Other 03.png';

const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);
    const [emailError, setemailError]: any = useState("")

    async function Submit(ele: any) {
        let flag = true;
        ele.preventDefault();
        setAccept(true);
        try {
            if (flag) {
                let response = await fetch("http://127.0.0.1:8000/api/login", {
                    method: "post",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    })
                });
                if(response.status === 200) {
                    window.localStorage.setItem('email', email);
                    window.location.pathname = '/';
                }
            }
        } catch(error: any) {
            setemailError(error.response.status);
        }
    }

    return (
        <div className='login-page'>
            <Container>
                <div className='w-100 d-flex justify-align-content align-items-center gap-5'>
                    <div className="style w-50 d-flex justify-content-center align-content-center">
                        <Image src={LoginImage} width={500} height={520} className='img' alt="style image only" />
                        <div className='bgColor'></div>
                    </div>
                    <form onSubmit={Submit} className='form w-50 d-flex justify-content-center align-items-center flex-column gap-3'>
                        <h1 className='text-center mb-5 mt-4'>Welcome Back!</h1>
                        <label className='d-flex flex-column'>
                            <label className='inputInfo' htmlFor="">email:</label>
                            <input className='imput' type="email" onChange={((element) => setEmail(element.target.value))} />
                        </label>
                        <label className='d-flex flex-column'>
                            <label className='inputInfo' htmlFor="">password:</label>
                            <input className='imput' type="password" onChange={((element) => setPassword(element.target.value))} />
                        </label>
                        <button className='submit'>login</button>
                        <div>Dont  have and account? <Link href={'/register'}>Register</Link></div>
                        {accept && emailError === 422}
                        {accept && emailError === 401 && <p style={{ fontSize: "10px", color: "red" }}> password inqurect </p>}
                        <div className='BGCOLOR'></div>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default page