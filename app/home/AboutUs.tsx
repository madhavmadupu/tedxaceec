import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center w-full bg-black text-white">
      <div className="flex flex-col items-start justify-center w-full max-w-3xl p-6 text-left">
        <div className="flex items-center mb-4">
          {/* Icon */}
          <div className="w-6 h-6 rounded-full bg-red-600 mr-2"></div>
          <div className="w-6 h-6 rounded-full border-2 border-red-600"></div>
          {/* Heading */}
          <h2 className="ml-4 text-4xl font-bold">About Us</h2>
        </div>
        <h3 className="text-2xl font-semibold mb-4">What is TED?</h3>
        <p className="text-lg leading-relaxed">
          Centered around topics like compact disks, e-books, and fractal
          mapping of coastlines, TED (Technology, Entertainment, and Design) has
          evolved into a global beacon of creativity and intellect. Initially
          featuring a narrow range of panelists, TED gradually broadened its
          scope to include business magnates, scientists, and philosophers.
          TED&apos;s influence extends beyond its flagship event, spawning a
          diverse array of sister initiatives such as TED-Ed educating people
          through engaging animations, TEDGlobal, a traveling conference held in
          various locales, and the TED Prize, offering recipients the
          opportunity to catalyze positive change. TED has since embraced
          inclusivity, welcoming all into its fold and continually inspiring
          progress.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
