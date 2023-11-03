import WorkItem from "./WorkItem";
const data = [
  {
    title: "QA Automation Analyst",
    duration: "Feb 2023 - current",
    employer: "IOFIT",
    details: "",
  },
  {
    title: "QA Analyst",
    duration: "Sep 2022 - Feb 2023",
    employer: "IOFIT",
    details: "",
  },
  {
    title: "QA Analyst",
    duration: "Sep 2020 - Oct 2022",
    employer: "IIT Calgary",

    details: "",
  },
  {
    title: "Freelance QA (P/T)",
    duration: "2018 - current",
    employer: "UTest",
    details: "",
  },
];

function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-6">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          employer={item.employer}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
}

export default Work;
