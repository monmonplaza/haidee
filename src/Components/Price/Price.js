import React from 'react'
import { Link } from 'react-router-dom'
import {pricePlan} from './Price-data'
import { Button } from '../Button/Button'
import './Price.css'


function Price() {
    return (
        <>
            <div className="price">
            <div className="section__header right-bar">
                    <h3>Pricing</h3>
                    <h4>Flexible Price </h4>
                </div>
                <div className="container">

                    <div className="price__wrapper">
                        {
                            pricePlan.map((plan, key)=>{
                                return (
                                    <div className="price__item" key={key}>
                                    <h2>{plan.title}</h2>
                                    <h3>{plan.price}</h3>
                                    <ul>
                                        <li>{plan.inclusion1}</li>
                                        <li>{plan.inclusion2}</li>
                                        <li>{plan.inclusion3}</li>
                                        <li>{plan.inclusion4}</li>
                                    </ul>
                                    <Link to="/">
                                        <Button buttonStyle="btn-primary" >{plan.btnLabel}</Button>
                                    </Link>
                                </div>
                                )
                              
                            })
                      
                        }
                     

                    </div>
                </div>
            </div>
        </>
    )
}

export default Price
