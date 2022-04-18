import React from 'react'

import starCard from '../images/star.png'

export default function Card(props){
    return(
        <div className='card'>
            <img src={props.img} alt="Katie" />
            <div className='bodyCard'>
                <p> <img src={starCard} alt='star'/>{props.rating}<span className='grayText'>({props.reviewCount})·{props.country}</span></p>
                <p>{props.title}</p>
                <p><span className='boldText'>From ${props.price1} </span>/ person</p>
            </div>
        </div>
    )
}