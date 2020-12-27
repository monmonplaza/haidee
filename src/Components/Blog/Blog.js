import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './Blog.css';
import {blogItem} from './Blog-data';
import {FaShareAlt, FaHeart} from 'react-icons/fa'

function Blog() {
    return (
        <div>
           <section className="blog">
           <div className="section__header left-bar">
                    <h3>Blog</h3>
                    <h4>Latest Blogs for you </h4>
                </div>
                <div className="container">
                    <div className="blog__wrapper">
                        {
                            blogItem.map((blog, key)=>{
                                return(
                                    <div className="blog__item" key={key}>
                                    <div className="blog__img">
                                        <img src={blog.url} alt=""/>    
                                    </div>    
                                    <div className="blog__content">
                                    <div className="metadata">
                                        <span>{blog.date}</span>
                                        <ul>
                                            <li><a href="/"><FaShareAlt /></a></li>
                                            <li><a href="/"><FaHeart /></a></li>
                                        </ul>
                                    </div>
                                        
                                        <h2>{blog.title}</h2>
                                        <p>{blog.excerpt}</p>

                         
                                        <Link to="/">
                                            <Button buttonStyle="btn--primary">{blog.btnLabel}</Button>
                                        </Link>
                                    </div>
                                </div> 
                                )
                            })
                        }
                       


                    </div>    
                </div>   
            </section> 
        </div>
    )
}

export default Blog
