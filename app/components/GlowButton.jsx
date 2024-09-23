import React from "react";
import Link from "next/link";
import "./GlowButton.css"

const GlowButton = () => {
  return (
    /* From Uiverse.io by VashonG */
    <Link href={"/tickets"} class="uiverse">
      <div class="wrapper">
        <span>UIVERSE</span>
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
      </div>
    </Link>
  );
};

export default GlowButton;
