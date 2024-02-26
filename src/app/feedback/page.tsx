"use client"
import React, { useRef } from 'react'
import Image from 'next/image';
import Feedback from "./assets/feedback_art.jpg";
import "./globals.scss";
import emailjs from '@emailjs/browser';


const Feed_back = () => {

  const form: any = useRef()
  const sentEmail = (e: any) => {
    e.preventDefault()
    emailjs.sendForm('service_80zkuka', 'template_0nt5mtj', form.current, {
      publicKey: 'PmARZnCEW1lngVqiK'
    }).then((resolve) => {
      alert('email has been sent');
      
    }, (error) => {
      throw new error('Failed', error);
    })
  }

  return (
    <div id='feedback' className='feed_back_section d-flex justify-content-center align-items-center mb-5 mt-5 pt-5 pb-5 gap-5 w-100'>
        <div className='d-flex justify-content-center align-items-center w-50'>
          <form ref={form} onSubmit={sentEmail} className='data_mail d-flex flex-column justify-content-center align-items-center w-100'>
              <label className='d-flex flex-column'>
                  <span>name:</span>
                  <input type="text" name='user_name' className='input user_name' placeholder='type your user name' />
              </label>
              <label className='d-flex flex-column'>
                  <span>email:</span>
                  <input type="email" name='email' className='input email' placeholder='type your email' />
              </label>
              <label className='d-flex flex-column'>
                  <span>message:</span>
                  <textarea name="user-project" className='textarea message' placeholder='type message feedback' cols={80} />
              </label>

              <button value="Sent" className='sent_email_FeedBack'>sent mail</button>
          </form>
        </div>
        <div className='art d-flex justify-content-center align-items-center w-50'>
          <Image className='img'src={Feedback} alt='' width={500} height={450} />
        </div>
    </div>
  )
}

export default Feed_back;