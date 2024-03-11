import React from 'react';
// import ErrorsPage from '../components/errors/ErrorsPage'; // start work
import SecondNav from '../components/secondNav/SecondNav';
import Footer from '../components/footer/Footer';
import "./modules.scss";

export default function page() {
  return (
    <div>
      <SecondNav />
      <div className='features'>
        <div className="informationDr d-flex gap-5">
          <div className="left_list p-2">
            <div className="header">
              <p className='links_header'><span className='news'>News</span> / <span className='retail'>Retail</span></p>
              <h2 className='title mt-5'>
                7 cool features to try in the Dragon store Shopping app.
              </h2>
              <p className='witeby mt-4'>
                <span className='title'>wite by: </span>
                ashraf moahmd</p>
            </div>
          </div>
          <div className="information">
            <h1 className='title'>
              With features like Virtual Try-On and Inspire,
              Dragon store’s mobile app makes your shopping experience interactive and fun.
            </h1>
            <p className="description">
              Even if you’ve been a longtime Dragon store customer,
              you may not be aware of all the features available to level up your shopping experience.
              The app is loaded with fun and useful tools that can help you discover new products and give you confidence in your purchases.
            </p>
          </div>
        </div>
        <div className="skillsOfDr mt-5">
          <h1 className="Headertitle">
            # all in information from dragon store.
          </h1>
          <ul className='mt-5'>
            <ul className='pages d-flex justify-content-around'>
              <ul>
                <h3>pages</h3>
                <li>home</li>
                <li>about us</li>
                <li>feature</li>
                <li>products</li>
                <li>contact me</li>
                <li>Categories</li>
                <li>login</li>
                <li>register</li>
              </ul>
              <ul>
                <h3>pages controls</h3>
                <li>dashboard</li>
                <li>show users</li>
                <li>add user</li>
                <li>edit user</li>
                <li>remove user</li>
                <li>add product</li>
                <li>show products</li>
                <li>remove product</li>
                <li>edit product</li>
              </ul>
            </ul>
            
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

/*\
https://assets.aboutamazon.com/dims4/default/7a42a48/2147483647/strip/true/crop/1999x1125+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F05%2Ffe%2F4278425d4a4eb9fe085e4a4ce2d6%2Fcoolfeaturesamazonmshop-hero-2000x1125.jpg
*/