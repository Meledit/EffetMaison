import React from 'react'
import "../css/home.css"

const Footer = () => {
  return (
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
  )
}

export default Footer