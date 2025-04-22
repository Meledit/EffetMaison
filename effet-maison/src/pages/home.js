import React from 'react'
import "../css/home.css" 
import BlurryBackground from '../components/BlurryBackground/BlurryBackground'
import pic from "../images/logo.png"
import ScrollingBand from '../components/ScrollingBand/ScrollingBand'
import rose from "../images/rose.jpg"
import Card from '../components/Card/Card'
import insta from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import X from "../images/twitter.png"
import heropic from "../images/green.jpg"

function Home( { setCart, refs } ) {

  function handleClick() {
    refs[1].current?.scrollIntoView();
  }

  return (
    <>
        <BlurryBackground />
        <div className='hero-section' ref={refs[0]} id="Home">
          <div className='hero-cont'>
            <div className='hero-vbox'>
              <div className='hero-content'>
                <h1 className='hero-title'>Votre atelier à domicile !</h1>
                <div className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
              </div>
              <button onClick={() => handleClick()} className='hero-button'>Get started</button>
            </div>
            <img className='hero-picture' src={heropic} />
          </div>
        </div>

        <ScrollingBand />

        <div className='who-section' ref={refs[2]} id="Us" >
          <div className='who-cont'>
            <div className='who-content'>
              <h2 className='who-title'>Qui sommes nous ?</h2>
              <img className='who-image' src={rose} />
              <div className='who-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore
              </div>
            </div>

            <div className='who-socials'>
              <a href='https://instagram.com'> 
                <img src={insta} />
              </a>
              <a href='https://linkedin.com'> 
                <img src={linkedin} />
              </a>
              <a href='https://x.com'> 
                <img src={X} />
              </a>
            </div>
          </div>
        </div>

        <div className='products-section' ref={refs[1]} id="Catalog">
          <BlurryBackground />
          <div className='products-cont'>
            <h2 className='products-title'>Nos produits phares</h2>
            <div className='products-cards'>
              <Card setCart={setCart} />
              <Card setCart={setCart} />
              <Card setCart={setCart} />
            </div>
          </div>
        </div>

        <footer>
          <h2 className='footer-title'>L'effet maison</h2>
          <div className='footer-content'>
            <div className='footer-sub-content'>
              <div className='footer-vbox'>
                <h3>Need help ?</h3>
                <div className='footer-list'>
                  <a href='' className='footer-item'>Contact Us</a>
                  <a href='' className='footer-item'>Blog</a>
                </div>
              </div>

              <div className='footer-vbox'>
                <h3>About Us</h3>
                <div className='footer-list'>
                  <a href='' className='footer-item'>FAQ</a>
                  <a href='' className='footer-item'>Support</a>
                </div>
              </div>
            </div>


            <div className='footer-vbox'>
              <h3>Community</h3>
              <div className='footer-list'>
                <a href='' className='footer-item'>Instagram</a>
                <a href='' className='footer-item'>Linked In</a>
                <a href='' className='footer-item'>X</a>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Home