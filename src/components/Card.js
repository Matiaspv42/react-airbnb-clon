import React from 'react'
import katieImage from '../images/katie-zaferes.png'
import starCard from '../images/star.png'

export default function Card(){
    return(
        <div className='card'>
            <img src={katieImage} alt="Katie" />
            <div className='bodyCard'>
                <p> <img src={starCard} alt='star'/> 5.0 <span className='grayText'>(6)·USA</span></p>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className='boldText'>From $136 </span>/ person</p>
            </div>
        </div>
    )
}