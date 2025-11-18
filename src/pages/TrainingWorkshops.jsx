import React from "react";

import HeroSection from "../components/common/HeroSection";
// import TrainingAndWorkshopsComponent from "../components/services/TrainingWorkshops/TrainingAndWorkshopsComponent";
import TrainingAndWorkshopNew from "../components/services/TrainingWorkshops/TrainingAndWorkshopNew";

const TrainingWorkshops = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="Training and Workshops" />
        <div
          className=" w-full flex flex-col justify-center
          items-center"
        >
          <TrainingAndWorkshopNew />
        </div>
      </div>
    </>
  );
};

export default TrainingWorkshops;
