"use client"
import React, {useState, useEffect} from 'react'
import './globals.css'

const Scroll = () => {

    const [scroll, setscroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 500 ? setscroll(true) : setscroll(false);
        })
    }, [])

    const scroll_to_top = () => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth',
        })
    }
    return (
        <div className={'btn_style'}>
            { scroll ? <button className={'btn_top'} onClick={scroll_to_top}> UP </button> : null} 
        </div>
    )
}

export default Scroll