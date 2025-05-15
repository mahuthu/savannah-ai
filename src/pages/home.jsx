import Hero from "../Components/Hero/Hero";
import AboutUs from "../Components/Aboutus/Aboutus";
import Pricing from "../Components/Pricing";
import FeatureSection from "../Components/FeatureSection";
import Testimonials from "../Components/Testimonials";
import PartnersSection from "../Components/Partners";
// import Contact from "../Components/Contact";
import OurModels from "../Components/OurModels";
import CoreBanner from "../Components/CoreBanner"
import CustomerStories from "../Components/CustomerStories";

const Home = ({ heroCount, setHeroCount, playStatus, setPlayStatus }) => {
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in ", text2: "to your passions"}
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      {/* <AboutUs /> */}
      {/* <FeatureSection /> */}
      {/* <OurModels /> */}
      <Pricing />
      <OurModels/>
      <CustomerStories />
      {/* <Testimonials /> */}
      <PartnersSection />
      <CoreBanner/>
      {/* <Contact /> */}
    </div>
  );
};

export default Home;