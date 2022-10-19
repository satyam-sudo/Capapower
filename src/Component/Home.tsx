import React from "react";
import Banner from "./Main/Banner";
import AboutSection from "./Main/AboutSection";
import ProjectLatest from "./Main/ProjectLatest";
import ServiceSection from "./Main/ServiceSection";
import Skill from "./Main/Skill";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ServiceSection />
      <ProjectLatest />
      <Skill />
    </div>
  );
};

export default Home;
