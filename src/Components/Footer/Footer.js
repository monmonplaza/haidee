import React from 'react'
import {FaBehance, FaPinterestP,FaFacebook ,FaInstagram, FaTwitter} from 'react-icons/fa';
import './Footer.css';
// import { Link } from 'react-router-dom'
import {Info} from './Footer-data';
import {FlickItem} from './Footer-flickr';



function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer__wrapper">
                       {
                            Info.map((info, key) => {
                                return (
                                <div className="footer__item info">

                                    <h2>{info.header}</h2>
                                    <h3>{info.subheader}</h3>
                                    <p>{info.address}</p>
                                    <a href="/">{info.email}</a>
                                        <ul>
                                            <li><a href="/"><FaBehance /></a></li>
                                            <li><a href="/"><FaPinterestP /></a></li>
                                            <li><a href="/"><FaFacebook /></a></li>
                                            <li><a href="/"><FaInstagram /></a></li>
                                            <li><a href="/"><FaTwitter /></a></li>
                                        </ul>
                                </div>
                                )
                            
                            })
                         
                           
                        }   
                            
                
               
                       <div className="footer__item">
                            <h4 className="footer__header">Useful Links</h4>
                            <ul className="links">
                                <li><a href="/">Portfolio</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Testimonial</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                       </div>

                       <div className="footer__item flickr">
                            <h4 className="footer__header">Flickr Photos</h4>
                                <div className="thumbnail">
                              {
                                FlickItem.map((img, key) => {
                                   return(
                                    <div key= {key}>
                                        <li><img src={img.url} alt="flick-img"/></li>
                                    </div>
                                   )
                                })
                                
                              }

                              </div>
                       </div>


                       <div className="footer__item">
                            <h4 className="footer__header">Stay in Touch</h4>
                            <form>
                                <input type="email" placeholder="Email"/>
                                <button>Subscribe</button>
                            </form>
                       </div>


                    </div>


                </div>
            </footer>   
        </>
    )
}

export default Footer
