import ProjectItem from "./ProjectItem";

const data = [
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio website developed using MERN stack. It has admin panel to update porfolio, data is stored in mongoDb.",
    link: "https://shripal.herokuapp.com/",
    github: "https://github.com/shripalp/mern-portfolio",
  },
  {
    title: "Little Lemon Restaurant Website",
    description:
      "Designed front-end website for Meta Professional Certificate requirement.  Its developed using React and Chakra UI",
    link: "https://littlelemon.herokuapp.com/",
    github: "https://github.com/shripalp/littlelemon",
  },
  {
    title: "The Yoga App",
    description: "A full stack website developed using express, mongoDB, React",
    link: "https://yogawithshripal.herokuapp.com/",
    github: "https://github.com/shripalp/yogaApp",
  },
  {
    title: "The Blogging App",
    description:
      "Completed as requirement for Full stack program for University of Helsinki. Utilized minimal front-end, used mostly back-end logic with express/mongoDB",
    link: "https://delicate-morning-2365.fly.dev/",
    github:
      "https://github.com/shripalp/fullstackopen/tree/main/part5/bloglist-frontend",
  },
  {
    title: "The PhoneBook App",
    description:
      "Completed as requirement for Full stack program for University of Helsinki. Utilized minimal front-end, used mostly back-end logic",
    link: "https://patient-pine-8962.fly.dev/",
    github: "https://github.com/shripalp/fullstackopen/tree/main/part3",
  },
  {
    title: "Notes App",
    description:
      "Compeleted as requirement for full stack open program for University of Helsinki",
    link: "https://young-moon-1448.fly.dev/",
    github: "https://github.com/shripalp/fullstackopen/tree/main/part2",
  },
];

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-6">
        Projects
      </h1>
      {data.map((item, idx) => (
        <ProjectItem
          key={idx}
          title={item.title}
          description={item.description}
          link={item.link}
          github={item.github}
        />
      ))}
    </div>
  );
}
export default Projects;
