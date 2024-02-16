"use client"
import React, { useState } from 'react';
import './globals.scss';
import Link from 'next/link';

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
                <div className='d-flex justify-content-center align-items-center flex-column'>
                        <h1 className='title text-center mb-5 mt-4'>Please Fill out form to Register!</h1>
                    <form className='form d-flex justify-content-center align-items-center flex-column' onSubmit={Submit}>
                        <label className='d-flex flex-column mb-4'>
                            <span className='inputInfo'>username:</span>
                            <input className='imput' type="text" name="" id="" onChange={(ele) => {setName(ele.target.value)}} />
                        </label>
                        <label className='d-flex flex-column  mb-4'>
                            <span className='inputInfo' >email:</span>
                            <input className='imput' type="email" name="" id="" required onChange={(ele) => {setEmail(ele.target.value)}} />
                        </label>
                        <label className='d-flex flex-column  mb-4'>
                            <span className='inputInfo' >password</span>
                            <input className='imput' type="password" name="" id="" onChange={(ele) => {setPassword(ele.target.value)}} />
                        </label>
                        <label className='d-flex flex-column  mb-1'>
                            <span className='inputInfo' >confirm password:</span>
                            <input className='imput' type="password" name="" id="" onChange={(ele) => {setConfirmpass(ele.target.value)}} />
                        </label>
                        <div className='errors mb-4'>
                            {name === "" || accept ? <p className='error'>user name is required.!</p> : null}
                            {accept && emailError === 422 && (<p className='error'> email is Already been taken.!</p>)}
                            {email === "" ? (<p className='error'>must type your email</p>) : null}
                            {password.length < 4 || accept ? <p className='error'>Password must be more than 12 char</p> : null}
                            {confirmpass !== password && accept && <p className='error'>Password does not match</p>}
                        </div>
                        <button className='submit'>Register</button>
                        <div style={{color: 'white', marginTop: '10px'}}>yes i have an account? <Link href={'/login'} style={{color: 'wheat'}}>login</Link></div>
                        <div style={{color: 'white'}}>Are You Admin <Link href={'/dashboard'} style={{color: 'wheat'}}>dashboard</Link></div>
                    </form>
                </div>
        </div>
    )
}

export default Register