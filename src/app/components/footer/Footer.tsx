import React from 'react';
import "./globals.css"

const Footer = () => {
  return (
    <section className='home_footer py-5 bg-body-secondary'>
      <div className='footer'>
        <div className="footer_head d-flex justify-content-between align-items-center">
          <div className="text_content mb-3">
            <h1>have a product in mind?</h1>
            <h1>start make payment with dragon store.</h1>
            <div className="btns mt-4 d-flex gap-3">
              <button className='btn btn_footer'>view resume</button>
              <button className='btn btn_footer active'>sent mail</button>
            </div>
          </div>
        <div className="logo">
          <h1 className='footer_title'>dragon store</h1>
        </div>
      </div>
      <div className="links_section d-flex mb-5 mt-5 p-3">
        <div className="links">
          <h6 className="title">navgation</h6>
          <p className='link'>about</p>
          <p className='link'>about us</p>
          <p className='link'>what we do</p>
          <p className='link'>catigory</p>
          <p className='link'>feedback</p>
        </div>
        <div className="links">
          <h6 className="title">what we do?</h6>
          <p className='link'>payment products</p>
          <p className='link'>show products</p>
          <p className='link'>login page</p>
          <p className='link'>register</p>
          <p className='link'>information products</p>
        </div>
        <div className="links">
          <h6 className="title">support</h6>
          <p className='link'>help center</p>
          <p className='link'>faq</p>
          <p className='link'>contat</p>
          <p className='link'>status</p>
        </div>
        <div className="links">
          <h6 className="title">legal</h6>
          <p className='link'>general</p>
          <p className='link'>privacy</p>
          <p className='link'>terms of use</p>
        </div>
        <div className="links">
          <h6 className="title">social</h6>
          <p className='link'>linkedin</p>
          <p className='link'>twitter</p>
          <p className='link'>dribble</p>
          <p className='link'>instagram</p>
          <p className='link'>medium</p>
        </div>
        <div className="links">
          <h6 className="title">admins</h6>
          <p className='link'>ashraf mohamed</p>
        </div>
      </div>
      <div className="inputSearch d-flex justify-content-between align-items-center px-2">
        <h3>sent me feedback</h3>
        <form className='form_footer'>
          <label className='lable'>
            <input type="search" name="search" className='search' />
            <button className='submet'>feedback</button>
          </label>
        </form>
      </div>
      <div className="end_footer d-flex justify-content-between align-items-center">
        <h3 className='brand_footer'>dragon store</h3>
        <p className='brand_footer'>&copy; 2024 all rights reseved</p>
      </div>
    </div>
    </section>
  )
}

export default Footer;