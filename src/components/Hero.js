import React from "react";
import heroImage from '../images/photo-grid.png'

export default function Hero(){
    return(
        <div className="Hero">
            <div className="heroImage">
                <img src={heroImage} alt="" />
            </div>
            <div className="textHero">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}