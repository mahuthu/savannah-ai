
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Hero from "./Components/Hero/Hero";
import Background from "./Components/Background/Background"
import FeatureSection from "./Components/FeatureSection";
import Workflow from "./Components/Workflow";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import AboutUs from "./Components/Aboutus/Aboutus";
import PartnersSection from "./Components/Partners";
import Contact from "./Components/Contact";

const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "what youlove"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in ", text2: "to your passions"}
  ]

  const [heroCount,  setHeroCount] = useState(2)
  const [playStatus, setPlayStatus] = useState(false)
  return (

<>    
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        
        <Background playStatus = {playStatus} heroCount = {heroCount} />
        
        <Hero 
        setPlayStatus = {setPlayStatus}
        heroData = {heroData}
        heroCount = {heroCount}
        setHeroCount = {setHeroCount}
        playStatus = {playStatus}
        />
        <AboutUs />
        <FeatureSection />
        
        <Pricing />
        <Testimonials />
        <PartnersSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
