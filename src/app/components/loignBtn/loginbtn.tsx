import React from 'react'
import Link from 'next/link';

const Loginbtn = () => {
    return (
        <div>{
            window.localStorage.getItem("email") ?
            <div onClick={() => {
                window.localStorage.removeItem("email");
                window.location.pathname = '/';
            }}>
                <span className='login'>log out</span>
            </div> :
            <Link href={'/register'} className='login py-1 px-3'>logn \ regiser</Link>
        }</div>
    )
}

export default Loginbtn