import React from "react";
// import HeroSection from '../components/about/seedsAct/HeroSection'
import HeroSection from "../components/common/HeroSection";
import SeedsActNew from "../components/about/seedsAct/SeedsActNew";

const SeedsAct = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="Seeds Act" breadcrumb="Home . Seeds Act" />
        <div
          className=" w-full  flex flex-col justify-center
          items-center "
        >
          {/* <SeedsActComponent/> */}
          <SeedsActNew />
        </div>
      </div>
    </>
  );
};

export default SeedsAct;
