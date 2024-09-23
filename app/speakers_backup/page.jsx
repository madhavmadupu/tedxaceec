"use client";
import React, { useEffect } from "react";
import "./Scroller.css";
import ProfileCard from "./ProfileCard";
import speakers from "./speakers.json";

// Scroll code used form here: https://codepen.io/kevinpowell/pen/BavVLra

const Scroller = () => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col lg:flex-row gap-[1rem] justify-center items-center w-full">
        <div
          className="hidden lg:block scroller overflow-hidden h-[600px]"
          data-direction="bottom"
          data-speed="fast"
        >
          <div className="scroller__inner flex flex-col gap-[1rem] justify-center items-center">
            <div className="flex gap-[1rem] flex-col">
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
        </div>
      </div>
    </div>
  );
};

export default Scroller;
