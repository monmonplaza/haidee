import React from 'react'
import {Link} from 'react-router-dom'
import {heroData} from './Hero-data'
import {Button} from '../Button/Button'
import './Hero.css'

function HeroSection() {
    return (
        <>
        <section className="hero">
            <div className="hero__content">
                    <div className="hero__content__wrapper ">
                    {
                heroData.map((text, key)=>{
                    return(
                    <div key={key} className="hero__content__wrapper ">
                        <span>{text.topHeader}</span>
                        <h1>{text.mainHeader}</h1>
                        <Button buttonSize="btn--medium" buttonStyle="btn--outline" buttonColor="light">
                            <Link to="/">
                            {text.btnLabel}
                            </Link>
                        </Button>
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

export default HeroSection
