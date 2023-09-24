import ProjectItem from "./ProjectItem";

const data = [
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website developed using MERN stack.",
    link: "https://shripal.herokuapp.com/",
    github: "github.com",
  },
  {
    title: "Little Lemon Restaurant Website",
    description:
      "Designed front-end website for Meta Professional Certificate.",
    link: "https://littlelemon.herokuapp.com/",
    github: "github.com",
  },
  {
    title: "Yoga App",
    description: "My yoga website",
    link: "https://yogawithshripal.herokuapp.com/",
    github: "github.com",
  },
  {
    title: "Blog App",
    description:
      "Completed as requirement for Full stack program for University of Helsinki. Utilized minimal front end, used mostly back end logic.",
    link: "https://delicate-morning-2365.fly.dev/",
    github: "Github",
  },
  {
    title: "PhoneBook App",
    description:
      "Completed as requirement for Full stack program for University of Helsinki. Utilized minimal front end, used mostly back end logic",
    link: "https://patient-pine-8962.fly.dev/",
    github: "github",
  },
  {
    title: "Notes App",
    description:
      "Compeleted as requirement for full stack open program for university of helsinki",
    link: "https://young-moon-1448.fly.dev/",
    github: "github",
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
