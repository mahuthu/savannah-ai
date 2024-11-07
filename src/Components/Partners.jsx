import React, { useRef } from 'react';
import Slider from 'react-slick';
import image1 from "../assets/openai.jpg";
import image2 from "../assets/langchain2.png";
import image4 from "../assets/llama2.png";
import image5 from "../assets/gemini2.png";
import image6 from "../assets/claude.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnersSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '20px'
        }
      },
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

  const handleImageClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <div className="relative mt-5 sm:mt-20 border-b border-neutral-800 min-h-[300px] sm:min-h-[600px] ">
      <div className="text-center px-2 sm:px-6 lg:px-8">
        <span className="inline-block bg-red-500/10 text-red-300 rounded-full text-xs sm:text-sm font-medium px-2 py-1 uppercase">
          Our Partners
        </span>
        <h2 className="text-xl sm:text-3xl lg:text-4xl mt-4 sm:mt-10 lg:mt-20 tracking-wide text-red-200">
          GENERATIVE AI PROVIDERS
        </h2>
        <div className="max-w-[90%] sm:max-w-screen-xl mx-auto mt-4 sm:mt-8">
          <Slider {...settings} ref={sliderRef}>
            {[image1, image2, image4, image5, image6].map((image, index) => (
              <div key={index} className="px-1 sm:px-2" onClick={handleImageClick}>
                <img src={image} alt={`Partner ${index + 1}`} className="w-full h-auto rounded-lg border border-orange-300 shadow-lg  my-2 sm:my-4 transition-transform duration-300 hover:scale-105" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
