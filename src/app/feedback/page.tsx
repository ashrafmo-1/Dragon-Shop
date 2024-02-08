import React from 'react'
import Image from 'next/image';
import Feedback from "./assets/feedback_art.jpg";
const Feed_back = () => {
  return (
    <div id='' className='feed_back_section d-flex justify-content-center align-items-center mb-5 mt-5 pt-5 pb-5 gap-5 w-100'>
        <div className='d-flex justify-content-center align-items-center w-50'>
          <form className='data_mail d-flex flex-column justify-content-center align-items-center w-100'>
              <label className='d-flex flex-column'>
                  <span>name:</span>
                  <input type="text" className='input user_name' placeholder='type your user name' />
              </label>
              <label className='d-flex flex-column'>
                  <span>email:</span>
                  <input type="text" className='input email' placeholder='type your email' />
              </label>
              <label className='d-flex flex-column'>
                  <span>message:</span>
                  <textarea className='textarea message' placeholder='type message feedback' cols={80} />
              </label>
          </form>
        </div>
        <div className='art d-flex justify-content-center align-items-center w-50'>
          <Image className='img'src={Feedback} alt='' width={500} height={450} />
        </div>
    </div>
  )
}

export default Feed_back;