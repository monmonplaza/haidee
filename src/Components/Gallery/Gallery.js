import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import {galleryItems} from './Gallery-data'
import './Gallery.css'

function Gallery() {
    return (
        <>
            <section className="gallery">
                <div className="section__header left-bar">
                    <h3>Portfolio</h3>
                    <h4>Browse By Category</h4>
                </div>
                <div className="container">
                    <div className="grid">
                        { 
                            galleryItems.map((image, key) => {
                                return(
                                    <div className={image.clsName} key= {key}>
                                        <img src={image.url} alt={image.title}/>
                                        <div className="image__desc">
                                            <h4>{image.title}</h4>
                                            <p>{image.year}</p>
                                            <Link to="/">
                                                <Button buttonStyle="btn--outline">{image.btnLabel}</Button>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                    
                                )
                            })
                        }  
                    </div>
                </div>
            </section>
        </>
    )
}
export default Gallery
