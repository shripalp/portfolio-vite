import React from "react";
import ProjectItem from "./ProjectItem";
import codingImg from "../assets/coding.jpg";
import fullstackImg from "../assets/fullstack.png";
import portfolioImg from "../assets/portfolio.jpeg";
import qaImg from "../assets/qa.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p1 className="text-center py-8">
        Ad nisi est nostrud consectetur laboris voluptate labore occaecat.
        Cillum et ipsum non tempor pariatur dolore sit ad duis velit excepteur.
        Officia est mollit sint dolore do ea deserunt officia. Culpa dolore sunt
        aliquip est. Commodo quis aliqua occaecat mollit nostrud. Quis ex et
        minim tempor excepteur Lorem esse do nisi laborum ut laborum occaecat.
        Eiusmod quis adipisicing amet deserunt.
      </p1>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={codingImg} title="Coding App" />
        <ProjectItem img={fullstackImg} title="Fullstack App" />
        <ProjectItem img={portfolioImg} title="Portfolio App" />
        <ProjectItem img={qaImg} title="Qa App" />
      </div>
    </div>
  );
};

export default Projects;
