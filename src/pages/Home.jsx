//import React from "react";
import Main from "../components/Main";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Sidenav from "../components/Sidenav";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Sidenav />
      <Main />
      <Skills />
      <Work />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Home;
