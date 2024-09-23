import React from "react";
import Spline from "@splinetool/react-spline/next";
import Loader from "./components/Loader";

const loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* <Spline
        scene="https://prod.spline.design/H2IuiHmxJdIevBaP/scene.splinecode" 
      /> */}
      <Loader />
      Loading...
    </div>
  );
};

export default loading;
