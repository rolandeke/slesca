import React from "react";
import MissionVisionNew from "../components/home/MissionVisionNew";
import AboutNoteNew from "../components/home/AboutNoteNew";
import KeyFunctionsNew from "../components/home/KeyFunctionsNew";
import StatisticsImpactNew from "../components/home/StatisticsImpactNew";
import RecentProjectsNew from "../components/home/RecentProjectsNew";
import GetInvolvedNew from "../components/home/GetInvolvedNew";
import TestimonialsNew from "../components/home/TestimonialsNew";
import CallToActionNew from "../components/home/CallToActionNew";
import BannerNew from "../components/home/BannerNew";

const Home = () => {
  return (
    <>
      <div
        className="w-full bg-gradient-to-b from-blue-50 to-green-200 h-full flex
        justify-center items-center flex-col"
      >
        <BannerNew />
        <div
          className=" w-full  flex flex-col justify-center
          items-center "
        >
          <MissionVisionNew />
          <AboutNoteNew />
        </div>
      </div>

      <>
        <GetInvolvedNew />
      </>

      <>
        <KeyFunctionsNew />
      </>

      <StatisticsImpactNew />

      <RecentProjectsNew />

      <CallToActionNew />
      <TestimonialsNew />
    </>
  );
};

export default Home;
