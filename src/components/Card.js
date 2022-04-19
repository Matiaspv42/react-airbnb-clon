import React from 'react'



export default function Card(props){

    let badgeText
    if(props.data.openSpots ===0){
        badgeText = 'SOLD OUT'
    }else if(props.data.location==='Online'){
        badgeText = 'ONLINE'
    }
    return(
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`/images/${props.data.coverImg}`} alt="Katie" />
            <div className='bodyCard'>
                <p> <img src={'/images/star.png'} alt='star'/>{props.data.stats.rating}<span className='grayText'>({props.data.stats.reviewCount})·{props.data.location}</span></p>
                <p className='card--title'>{props.data.title}</p>
                <p><span className='boldText'>From ${props.data.price} </span>/ person</p>
            </div>
        </div>
    )
}
