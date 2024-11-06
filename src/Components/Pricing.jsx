import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/profile-pictures/data4.png';
import image2 from '../assets/profile-pictures/data1.jpeg';
import image3 from '../assets/profile-pictures/data3.jpeg';
import image4 from '../assets/profile-pictures/data5.png';
import image5 from "../assets/profile-pictures/data6.jpeg";


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
    slidesToShow: 3,  // Default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,  // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,  // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ],
    beforeChange: (current, next) => {
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
    },
  };

  console.log('Slider Settings:', settings);


  const handleImageClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Resume autoplay when clicking on an image
    }
  };

  return (
    <div className="flex flex-col items-center mt-4 sm:mt-6 lg:mt-20 px-3 sm:px-4">
      <h1 className="text-2xl sm:text-4xl lg:text-7xl text-center tracking-wide px-2">
      leveraging your data
        <span className="bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
          {' '}
          to unlock the true value of AI
        </span>
      </h1>
      
      <p className="mt-4 sm:mt-10 text-1xl sm:text-lg text-center text-lime-200 max-w-4xl font-bold px-4 sm:px-6">
        Securely store, access, and share annotated datasets on our cloud platform. We license high-quality data for your AI projects. Start today and unleash your data's potential!
      </p>
      
      <div className="flex justify-center mt-4 sm:mt-6">
        <a 
          href="#" 
          className="bg-gradient-to-r from-red-500 to-orange-300 
            py-2 sm:py-3 
            px-3 sm:px-4 
            mx-2 sm:mx-3 
            rounded-md 
            text-xs sm:text-base
            whitespace-nowrap
            hover:opacity-90 
            transition-opacity"
        >
          Explore Our Common Datasets
        </a>
      </div>

      <div className="w-full max-w-[95%] sm:max-w-screen-xl mx-auto mt-6 sm:mt-8">
        <Slider {...settings} ref={sliderRef}>
          <div className="px-1 sm:px-2" onClick={handleImageClick}>
            <img 
              src={image1} 
              alt="Image 1" 
              className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" 
            />
          </div>
          <div className="px-1 sm:px-2" onClick={handleImageClick}>
            <img 
              src={image2} 
              alt="Image 2" 
              className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" 
            />
          </div>
          <div className="px-1 sm:px-2" onClick={handleImageClick}>
            <img 
              src={image3} 
              alt="Image 3" 
              className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" 
            />
          </div>
          <div className="px-1 sm:px-2" onClick={handleImageClick}>
            <img 
              src={image4} 
              alt="Image 4" 
              className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" 
            />
          </div>
          <div className="px-1 sm:px-2" onClick={handleImageClick}>
            <img 
              src={image5} 
              alt="Image 5" 
              className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" 
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Pricing;
