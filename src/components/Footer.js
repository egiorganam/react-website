/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

import './Footer.css' 

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best
                    vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" placeholder='email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Term of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Term of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Term of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rightss">TRVL © 2020</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook" 
                            to='/' 
                            target='_blank' 
                            aria-label='Facebook'>
                                <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link 
                            className="social-icon-link instagram" 
                            to='/' 
                            target='_blank' 
                            aria-label='Instagram'>
                                <i className="fab fa-instagram"></i>
                        </Link>
                        <Link 
                            className="social-icon-link youtube" 
                            to='/' 
                            target='_blank' 
                            aria-label='Youtube'>
                                <i className="fab fa-github"></i>
                        </Link>
                        <Link 
                            className="social-icon-link twitter" 
                            to='/' 
                            target='_blank' 
                            aria-label='Twitter'>
                                <i className="fab fa-twitter"></i>
                        </Link>
                        <Link 
                            className="social-icon-link linkedin" 
                            to='/' 
                            target='_blank' 
                            aria-label='Linkedin'>
                                <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
