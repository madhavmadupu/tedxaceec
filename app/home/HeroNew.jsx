import React from "react";
import Image from "next/image";
import NavCTA from "../components/NavCTA";
import GlowButton from "../components/GlowButton";
import NoAnimButton from "../components/NoAnimButton";

const HeroNew = () => {
  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center">
      <Image
        src="/HeroImage.png"
        alt="HeroImage"
        layout="fill"
        objectFit="cover"
        className="absolute blur-sm"
      />
      <div className="flex flex-col justify-center items-center z-10 gap-[2rem]">
        <Image
          src="logo.svg"
          alt="logo"
          width={600}
          height={600}
          className="w-[20rem] md:w-[30rem] lg:w-[40rem] shadow-lg"
          draggable={false}
        />
        <NavCTA />
      </div>
    </div>
  );
};

export default HeroNew;
