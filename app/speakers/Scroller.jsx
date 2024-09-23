"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import speakers from "./speakers.json";
import "./Scroller.css";

const Scroller = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    const scroller = document.querySelector(".scroller__inner");
    const content = Array.from(scroller.children);
    
    // Duplicate each item for seamless scroll
    content.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", true);
      scroller.appendChild(clone);
    });
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
        className={`scroller overflow-hidden h-[600px] ${isPaused ? "paused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-speed="fast"
      >
        <div className="scroller__inner flex flex-col gap-[2rem] justify-center items-center">
          {speakers.map((speaker) => (
            <ProfileCard
              key={speaker.id}
              name={speaker.name}
              designation={speaker.designation}
              description={speaker.description}
              image={speaker.image}
            />
          ))}
        </div>
      </div>
  );
};

export default Scroller;
