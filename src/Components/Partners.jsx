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

  // Updated settings with responsive configuration
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
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
    <div className="relative mt-5 sm:mt-20 border-b border-neutral-800 min-h-[300px] sm:min-h-[600px]" style={{ backgroundColor: 'rgba(0,0,0, 0.4)' }}>
      <div className="text-center px-2 sm:px-6 lg:px-8">
        <span className="inline-block bg-neutral-900 text-red-700 rounded-full text-xs sm:text-sm font-medium px-2 py-1 uppercase">
          Our Partners
        </span>
        <h2 className="text-xl sm:text-3xl lg:text-5xl mt-4 sm:mt-10 lg:mt-20 tracking-wide text-red-200">
          GENERATIVE AI PROVIDERS
        </h2>
        <div className="max-w-[90%] sm:max-w-screen-xl mx-auto mt-4 sm:mt-8">
          <Slider {...settings} ref={sliderRef}>
            <div className="px-1 sm:px-2" onClick={handleImageClick}>
              <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" />
            </div>
            <div className="px-1 sm:px-2" onClick={handleImageClick}>
              <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" />
            </div>
            {/* <div className="px-1 sm:px-2" onClick={handleImageClick}>
              <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" />
            </div> */}
            <div className="px-1 sm:px-2" onClick={handleImageClick}>
              <img src={image4} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" />
            </div>
            <div className="px-1 sm:px-2" onClick={handleImageClick}>
              <img src={image5} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" />
            </div>
            <div className="px-1 sm:px-2" onClick={handleImageClick}>
              <img src={image6} alt="Image 3" className="w-full h-auto rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-2 sm:my-4" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
