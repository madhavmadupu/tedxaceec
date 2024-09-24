import React from "react";
import HeroSection from "./HeroSection";
import ThemeSection from "./ThemeSection";
import Venue from "./Venue";
import AboutUs from "./AboutUs";
import Benifits from "./Benifits";
import Dignitaries from "./Dignitaries";
import HeroNew from "./HeroNew"
import AboutACE from "./AboutACE"

const Landing = () => {
  return (
    <div className="flex flex-col gap-[4rem]">
      <HeroNew />
      {/* <HeroSection /> */}
      <Dignitaries />
      <ThemeSection />
      <AboutUs />
      <AboutACE />
      <Benifits />
      <Venue />
    </div>
  );
};

export default Landing;
