//import React from "react";
import SkillItem from "./SkillItem";
const data = [
  {
    area: "Software testing/automation",
    skills:
      "Web browser automation and testing with C#-Selenium-NUnit, unittest with C#-XUnit, Pyhton-Pytest, and Javascript-Cypress",
  },
  {
    area: "Manual testing",
    skills: "Jira, Agile methodologies, MS Excel",
  },
  {
    area: "Web-devopment",
    skills:
      "Full stack Web delopment with MongoDb-Express-React, MySQL-Django/Flask/Python-Javascript",
  },
  {
    area: "Web building, hosting, and CI/CD",
    skills:
      "GitHub, ViteJS, NextJs, Create-React-App, Heroku, Netflify, Vercel",
  },
  {
    area: "API testing",
    skills: "Express API and Postman for testing",
  },
];

function Skills() {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-6">
        Skills
      </h1>
      {data.map((item, idx) => (
        <SkillItem key={idx} area={item.area} skills={item.skills} />
      ))}
    </div>
  );
}

export default Skills;
