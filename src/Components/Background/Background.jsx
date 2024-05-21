import "./Background.css";
import React from 'react';

import video1 from '../../assets/Gen-2spaceship.mp4';
import image1 from '../../assets/african.jpg';
import image2 from '../../assets/african.jpg';
import image3 from '../../assets/african.jpg';

const Background = ({ playStatus, heroCount }) => {
    let backgroundImage = '';

    if (heroCount === 0) {
        backgroundImage = image1;
    } else if (heroCount === 1) {
        backgroundImage = image2;
    } else if (heroCount === 2) {
        backgroundImage = image3;
    }

    return (
        <div className="background-wrapper">
            {playStatus ? (
                <video className="background background-video" autoPlay loop muted>
                    <source src={video1} type="video/mp4" />
                </video>
            ) : (
                <img src={backgroundImage} className="background background-img" alt="" />
            )}
        </div>
    );
};

export default Background;
