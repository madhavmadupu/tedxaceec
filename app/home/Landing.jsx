import React from "react";
import HeroSection from "./HeroSection";
import ThemeSection from "./ThemeSection";
import Venue from "./Venue";
import AboutUs from "./AboutUs";
import Benifits from "./Benifits";
import Dignitaries from "./Dignitaries";
import HeroNew from "./HeroNew"

const Landing = () => {
  return (
    <div className="flex flex-col gap-[4rem]">
      <HeroNew />
      {/* <HeroSection /> */}
      <Dignitaries />
      <ThemeSection />
      <AboutUs />
      <Benifits />
      <Venue />
    </div>
  );
};

export default Landing;
