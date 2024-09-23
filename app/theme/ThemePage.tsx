import Image from "next/image";
import React from "react";
import Link from "next/link";
import KnowMore from "../components/KnowMore";

const ThemeSection = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[1rem] ">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-[3rem]">
        <Image src={"/dude.svg"} alt={"dude"} width={400} height={400} />
        <div className="flex flex-col justify-center items-start gap-[2rem] max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-bold text-center md:text-left text-balance">
            Uturn - Pivotal Points in Our Life
          </h1>
          
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl py-[3rem]">
        <h2 className="  py-4 font-black">Why the Uturn Matters?</h2>
        <p className=" leading-7 text-justify">
          Life is full of unexpected twists. At the time, these U-turns may seem
          overwhelming, difficult, or even insurmountable. However, its often
          through these moments of uncertainty and challenge that we find our
          true strength, values, and purpose. The Uturn concept encourages us to
          embrace these defining moments rather than fear them. Each U-turn
          represents a powerful transformation, a turning point where we can
          choose to evolve.
        </p>
      </div>

      {/* Real-Life Examples Section */}
      <div className="max-w-4xl py-[3rem]">
        <h2 className="  py-4 font-black">Real-Life Uturn Stories</h2>
        <p className=" leading-7 text-justify">
          Throughout history, individuals have experienced monumental U-turns
          that changed their lives and the world around them. Consider Steve
          Jobs return to Apple after being ousted from the company he helped
          create. That U-turn not only transformed his personal trajectory but
          also sparked one of the most innovative periods in tech history.
        </p>
        <p className=" leading-7 text-justify">
          On a more personal level, many of us have faced U-turns—whether it was
          a career shift, a sudden move to a new city, or the loss of a loved
          one. These experiences push us to reflect, adapt, and grow.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col justify-center items-center py-[3rem]">
        <h2 className="  py-4 font-black">Whats Your Uturn?</h2>
        <p className=" leading-7 text-center max-w-2xl">
          We invite you to reflect on your own pivotal moments. What U-turns
          have shaped who you are today? How did you overcome them, and what did
          they teach you? Join us as we explore these stories of transformation
          and embrace the power of change.
        </p>
      </div>
    </div>
  );
};

export default ThemeSection;
