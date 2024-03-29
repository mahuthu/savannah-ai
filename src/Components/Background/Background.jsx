import "./Background.css"
import React from 'react';

import video1 from '../../assets/Gen-2spaceship.mp4';

import image1 from '../../assets/african.jpg';
import image2 from '../../assets/african.jpg';
import image3 from '../../assets/african.jpg';



const Background = ({playStatus, heroCount}) => {
    if (playStatus) {
        return (
            <video className="background" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
            </video>
        )
        } 
    else if (heroCount === 0) {
        return (
            <img src={image1} className = "background" alt = "" />

        )
    }
    else if(heroCount === 1) {
        return (
            <img src={image2} className = "background" alt = "" />
        )
        
    }
    else if(heroCount === 2) {
        return (
            <img src={image3} className = "background" alt = "" />
        )
    }
    
}

export default Background