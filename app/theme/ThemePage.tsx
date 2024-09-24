import Image from "next/image";
import React from "react";

const ThemeSection = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[1rem] ">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-[1rem]">
        <Image src={"/dude.svg"} alt={"dude"} width={400} height={400} />
        <div className="flex flex-col justify-center items-start gap-[2rem] max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-bold text-center md:text-left text-balance">
            UTurn - Pivotal Moments In Life
          </h1>
        </div>
      </div>

      {/* Why the U-Turn Matters Section */}
      <div className="max-w-4xl py-[1rem]">
        <h2 className="py-4 font-black text-2xl text-red-500">Why the U-turn Matters?</h2>
        <p className="leading-7 text-justify">
          Life is full of unexpected twists. At times, these U-turns may seem overwhelming, difficult, or even insurmountable. However, it&apos;s often through these moments of uncertainty and challenge that we find our true strength, values, and purpose. The U-turn concept encourages us to embrace these defining moments rather than fear them. Each U-turn represents a powerful transformation, a turning point where we can choose to evolve.
        </p>
      </div>

      {/* Recognizing the Need for Change Section */}
      <div className="max-w-4xl py-[1rem]">
        <h2 className="py-4 font-black text-2xl text-red-500">Recognizing the Need for Change</h2>
        <p className="leading-7 text-justify">
          Life is full of moments where persistence may not be the best strategy. Knowing when to step back and reevaluate is a critical skill. The U-turn is about acknowledging that your current path is not yielding desired results, understanding that persistence on the wrong path can hinder progress rather than facilitate it, and realizing that success often requires flexibility and a willingness to adapt.
        </p>
      </div>

      {/* The Power of Pivoting Section */}
      <div className="max-w-4xl py-[1rem]">
        <h2 className="py-4 font-black text-2xl text-red-500">The Power of Pivoting</h2>
        <p className="leading-7 text-justify">
          Pivoting doesn&apos;t signify failure; instead, it&apos;s a strategic move. Whether in a career, personal goal, or business venture, taking a U-turn can lead to unforeseen possibilities that are more aligned with your values, ambitions, or the demands of the environment. The U-turn teaches us that innovation often stems from moments of reevaluation, small shifts can have significant impacts, and life&apos;s detours can offer experiences and lessons that a straight path cannot.
        </p>
      </div>

      {/* Overcoming the Fear of Change Section */}
      <div className="max-w-4xl py-[1rem]">
        <h2 className="py-4 font-black text-2xl text-red-500">Overcoming the Fear of Change</h2>
        <p className="leading-7 text-justify">
          One of the biggest hurdles in making a U-turn is fear—fear of judgment, failure, or the unknown. However, history and personal experiences show us that many great achievements result from taking risks and changing course. The U-turn encourages embracing uncertainty as an integral part of growth and viewing change not as a setback but as an opportunity for reinvention.
        </p>
      </div>

      {/* Real-Life U-turn Stories Section */}
      <div className="max-w-4xl py-[1rem]">
        <h2 className="py-4 font-black text-2xl text-red-500">Real-Life U-turn Stories</h2>
        <p className="leading-7 text-justify">
          Throughout history, individuals have experienced monumental U-turns that changed their lives and the world around them. For instance, Slack started as a gaming company and shifted focus to communication software, now widely used worldwide. On a personal level, many of us have faced U-turns—whether it was a career shift, a sudden move to a new city, or the loss of a loved one. These experiences push us to reflect, adapt, and grow.
        </p>
      </div>

      {/* The Role of Reflection Section */}
      <div className="max-w-4xl py-[1rem]">
        <h2 className="py-4 font-black text-2xl text-red-500">The Role of Reflection</h2>
        <p className="leading-7 text-justify">
          Making a U-turn requires deep self-reflection. It&apos;s about looking at where you&apos;ve been, understanding where you are, and considering where you want to go. U-turns are a form of self-awareness and growth, helping you find clarity essential for knowing when and how to pivot.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col justify-center items-center py-[1rem]">
        <h2 className="py-4 font-black text-2xl text-red-500">What Sets Us Apart?</h2>
        <p className="leading-7 text-center max-w-2xl">
          TEDx ACE Engineering College is not just an event—it&apos;s a movement! A place where U-turns lead to transformation, where ideas pivot and spark the fire of change. Our students are ready to challenge the status quo, and we need your creative energy to fuel their journey. Ready for something unforgettable?
        </p>
        <h2 className="py-4 font-black text-red-500 text-2xl">Are You a Catalyst for Change?</h2>
        <p className="leading-7 text-center max-w-2xl">
          We’re looking for thought leaders who can push boundaries, challenge assumptions, and ignite curiosity in our students. Let&apos;s break through barriers together and transform roadblocks into stepping stones. Join us as we make TEDx ACE a hotspot of inspiration, where every U-turn sparks a revolution.
        </p>
      </div>
    </div>
  );
};

export default ThemeSection;
