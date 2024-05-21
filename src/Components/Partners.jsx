import React from 'react';
import image1 from "../assets/openai.jpg";
import image2 from "../assets/langchain2.png";
// import image3 from "../assets/openai.png";
import image4 from "../assets/llama2.png";
import image5 from"../assets/gemini2.png"
import image6 from "../assets/claude.png";
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PartnersSection = () => {
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
    settings.slidesToShow = 2; // Show three images on large screens
  }

  const handleImageClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Resume autoplay when clicking on an image
    }
  };
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px]" style={{ backgroundColor: 'rgba(0,0,0, 0.4)' }}>
      <div className="text-center">
        <span className="bg-neutral-900 text-red-700 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Our Partners
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-red-200">
          Models and Tools
        </h2>
        <Slider {...settings} ref={sliderRef} className="w-full max-w-screen-xl mx-auto">
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
        {/* <div className="mx-2" onClick={handleImageClick}>
          <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div> */}
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image4} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image5} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
        <div className="mx-2" onClick={handleImageClick}>
          <img src={image6} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4" />
        </div>
      </Slider>
      </div>
    </div>
  );
};

export default PartnersSection;
