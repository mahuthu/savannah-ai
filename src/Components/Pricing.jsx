import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/Julias2.png';
import image2 from '../assets/Numerous.jpg';
import image3 from '../assets/canva.jpg';
import image4 from '../assets/tealhq.jpg';
import image5 from "../assets/framer.jpg";


const Pricing = () => {
  const sliderRef = useRef(null);

  // Define slider settings for different screen sizes
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    beforeChange: (current, next) => {
      if (sliderRef.current) {
        sliderRef.current.slickPause(); // Pause the slider when changing slides
      }
    },
  };

  console.log('Slider Settings:', settings);


  // Adjust slidesToShow based on screen width
  if (window.innerWidth < 768) {
    settings.slidesToShow = 1; // Show one image on small screens
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    settings.slidesToShow = 2; // Show two images on medium screens
  } else {
    settings.slidesToShow = 3; // Show three images on large screens
  }

  const handleImageClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Resume autoplay when clicking on an image
    }
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Leverage AI
        <span className="bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
          {' '}
          to boost your productivity
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-lime-200 max-w-4xl font-bold">
        Empower your creativity and bring your app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
      </p>
      <div className="flex justify-center ">
        <a href="#" className="bg-gradient-to-r from-red-500 to-orange-300 py-3 px-4 mx-3 rounded-md">
          View various free AI tools
        </a>
        
      </div>
      <Slider {...settings} ref={sliderRef} className="w-full max-w-screen-xl mx-auto">
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image4} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image5} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
      </Slider>
    </div>
  );
};

export default Pricing;
