import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import {ctaItem} from './Cta-data'
import './Cta.css';


function Cta() {
    return (
        <>
        {
            ctaItem.map((cta, key) => {
                return (
                    <div className="cta" key={key}>
                        <div className="cta__wrapper">
                            <h2>{cta.title}</h2>
                            <h3>{cta.text}</h3>
                            <Link to="/">
                                <Button buttonStyle="btn-primary" >{cta.btnLabel}</Button>
                            </Link>
                        </div>
                    </div>
                )
            })
        }
            
        </>
    )
}

export default Cta
    