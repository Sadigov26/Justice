import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import AboutTwo from "../../Components/aboutTwoSec/AboutTwo";
import FiftyYear from "../../Components/FiftyYear/FiftyYear"
import Happyclients from "../../Components/Happyclients/Happyclients"


const Home = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <AboutTwo/>
      <FiftyYear/>
      <Happyclients/>
    </div>
  );
};

export default Home;
