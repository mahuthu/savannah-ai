import React from 'react';
import image1 from "../../assets/afroprompts3.png";
import image2 from "../../assets/nairobi2.jpg";


const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-20 relative" style={{ backgroundImage: {image2}, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.8 }}>

      <div className="text-center">
        <span className="bg-neutral-900 text-red-700 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          About Us
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-red-300 font-bold ">
          Savannah {" "}
          <span className="bg-gradient-to-r from-red-200 to-red-400 text-transparent bg-clip-text font-bold">
            AI
          </span>
        </h2>
        {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-lime-200 ">
          Consulting {" "}
          <span className="bg-gradient-to-r from-red-700 to-red-900 text-transparent bg-clip-text">
            Agency
          </span>
        </h2> */}
      </div>
      <div className="container mx-auto px-4 py-20 ">
      <div className="flex justify-center items-center h-full">
      <span
  className="bg-gradient-to-r from-lime-200 to-lime-300 text-transparent bg-clip-text text-lg font-bold text-center"
  style={{ fontSize: '1.5rem' }}
>
  Savannah AI is a leading AI consulting agency based in Kenya dedicated to providing comprehensive AI solutions that enhance productivity, streamline processes, and drive growth for organizations across various industries.
</span>
        <span className="bg-gradient-to-r from-lime-200 to-lime-300 text-transparent bg-clip-text text-lg font-bold text-center text_lg">
        </span>
        
  </div>
      </div>
    </div>
  );
};

export default AboutUs;
