"use client"
import React, {useState} from 'react';
import './globals.scss';
import Link from 'next/link';

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
                <div className='d-flex justify-content-center align-items-center flex-column gap-5'>
                        <h1 className='text-center mb-5 mt-4' style={{color: 'white'}}>Welcome Back!</h1>
                    <form onSubmit={Submit} className='form d-flex justify-content-center align-items-center flex-column gap-3'>
                        <label className='d-flex flex-column'>
                            <label className='inputInfo' htmlFor="">email:</label>
                            <input className='imput' type="email" onChange={((element) => setEmail(element.target.value))} />
                        </label>
                        <label className='d-flex flex-column'>
                            <label className='inputInfo' htmlFor="">password:</label>
                            <input className='imput' type="password" onChange={((element) => setPassword(element.target.value))} />
                        </label>
                        <div className="errors">
                            {accept && emailError === 422}
                            {accept && emailError === 401 && <p style={{ fontSize: "10px", color: "red" }}> password inqurect </p>}
                        </div>
                        <button className='submit'>login</button>
                        <div style={{color: 'white'}}>Dont  have and account? <Link href={'/register'} style={{color: 'wheat'}}>Register</Link></div>
                    </form>
                </div>
        </div>
    )
}

export default page