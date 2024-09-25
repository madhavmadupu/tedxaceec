import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center w-full bg-black text-white py-12 gap-[150px]">
      <div className="flex flex-col items-start justify-center w-full max-w-3xl p-6 text-left">
        <div className="flex items-center mb-4">
          {/* Icon */}
          <div className="w-6 h-6 rounded-full bg-red-600 mr-2"></div>
          <div className="w-6 h-6 rounded-full border-2 border-red-600"></div>
          {/* Heading */}
          <h2 className="ml-4 text-4xl font-bold">What is TED?</h2>
        </div>
        <p className="text-lg leading-relaxed text-balance w-full">
          TED (Technology, Entertainment, and Design) evolved from niche topics into a global platform featuring diverse speakers. With initiatives like TED-Ed, TEDGlobal, and the TED Prize, it fosters education, innovation, and positive change, inspiring people worldwide.
        </p>
      </div>
      <div>
        <Image src={"/bulb.png"} alt="bulb" width={100} height={100} />
      </div>
    </div>
  );
};

export default AboutUs;
