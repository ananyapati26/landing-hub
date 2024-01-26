import React from 'react'
import {plansData} from "../data/plansData"
import './Plans.css'
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className='plans-container'>
        <div className='blur blur-p-1'></div>
        <div className='blur blur-p-2'></div>
        <div className='programs-header' style={{gap: '2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>
        <div className='all-plans'>
            {plansData.map((plan) => (
                <div className='each-plan'>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span className='price'>$ {plan.price}</span>
                    {plan.features.map((fs) =>(
                        <div className='features'>
                        <img src={whiteTick} alt="" />
                        <span> {fs}</span>
                        </div>
                    
                    ))} 
                    <div><span>See more benefits</span></div>
                    <button className='btn btn-p' onClick={()=> alert('Coming soon!')}>Enroll Now</button>
                </div>
            ))}
        </div>

        <div className='plans'>

        </div>
    </div>
  )
}

export default Plans