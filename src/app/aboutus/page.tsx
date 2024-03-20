import React from 'react'
// import ErrorsPage from '../components/errors/ErrorsPage'; start work
// import Nav from '../components/navgationbar/Nav'
import Footer from '../components/footer/Footer'
import "./modules.scss"
import SecondNav from '../components/secondNav/SecondNav'

export default function page() {
  return (
    <section>
      <SecondNav />
      <div className="aboutUs">
        <div className='headerInfo d-flex justify-content-between my-5'>
          <h5>Who We Are</h5>
          <p>
            Dragon Store is guided by four principles:
            customer obsession rather than competitor focus,
            passion for invention, commitment to operational excellence,
            and long-term thinking. Dragon Store strives to be Earth’s most customer-centric company,
            Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping,
            personalized recommendations, Prime, Fulfillment by Dragon Store, AWS, Kindle Direct Publishing,
            Kindle, Career Choice, Fire tablets, Fire TV, Dragon Store Echo, Alexa, Just Walk Out technology,
            Dragon Store Studios, and The Climate Pledge are some of the things pioneered by Dragon Store.
          </p>
        </div>
        <div className='boxes_more_information my-5 pt-5 d-flex gap-4'>
          <div className="box p-3">
            <h2 className='mb-3'>
              Dragon Store Leadership Principles
            </h2>
            <p className='mb-5'>
              Our Leadership Principles are more than inspirational wall hangings. 
              The 16 principles guide our discussions and decisions every day.
            </p>
            <button>Learn more</button>
          </div>
          <div className="box p-3">
            <h2 className='mb-3'>
              Our Positions
            </h2>
            <p className='mb-5'>
              While our positions are carefully considered and deeply held,
              there is much room for healthy debate and differing opinions.
              We hope being clear about our positions is helpful.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
