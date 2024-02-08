"use client"
import React from 'react'
import './globals.css'
import { useState } from 'react'

const Create_New_User = () => {
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
                let response = await fetch("http://127.0.0.1:8000/api/user/create", {
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
                }).then((response) => {
                    console.log("status code", response.status);
                    if(response.status === 200) {
                        window.location.pathname = '/dashboard/showusers';
                    }
                })
            }
        } catch(error) {
            setemailError(error.response.status);
        }
    }

    return (
        <div className='Create_New_User d-flex justify-content-center align-items-center w-100'>
            <form className='form d-flex justify-content-center align-items-center flex-column gap-3' onSubmit={Submit}>
                <h1 className=' create_user_title text-center mb-5 mt-4'>inter new user information</h1>
                <label className='d-flex flex-column'>
                    <span className='inputInfo'>username:</span>
                    <input className='input' type="text" name="" id="" onChange={(ele) => {setName(ele.target.value)}} />
                    {name === "" && accept && <p className='error'>user name is required.!</p>}
                </label>
                <label className='d-flex flex-column'>
                    <span className='inputInfo' >email:</span>
                    <input className='input' type="email" name="" id="" required onChange={(ele) => {setEmail(ele.target.value)}} />
                    {accept === true || emailError === 422 ? (<p className='error'> email is Already been taken.!</p>) : null}
                    {email === "" ? (<p className='error'>must type your email</p>) : null}
                </label>
                <label className='d-flex flex-column'>
                    <span className='inputInfo' >password</span>
                    <input className='input' type="password" name="" id="" onChange={(ele) => {setPassword(ele.target.value)}} />
                    {password.length < 4 && accept && <p className='error'>Password must be more than 12 char</p>}
                </label>
                <label className='d-flex flex-column'>
                    <span className='inputInfo' >confirm password:</span>
                    <input className='input' type="password" name="" id="" onChange={(ele) => {setConfirmpass(ele.target.value)}} />
                    {confirmpass !== password && accept && <p className='error'>Password does not match</p>}
                </label>
                <button className='submit btn btn-outline-primary py-2 px-3'>Create_New_User</button>
            </form>
        </div>
    )
}

export default Create_New_User;