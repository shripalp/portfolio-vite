import WorkItem from "./WorkItem";
const data = [
  {
    year: 2020,
    title: "QA Analyst",
    duration: "2 Years",
    details:
      "Deserunt proident occaecat sit cillum cupidatat. Nulla ut ea mollit aute reprehenderit. Anim sunt tempor mollit fugiat enim culpa ad fugiat do eiusmod. Officia velit commodo velit occaecat sint laboris ut pariatur labore. Voluptate sit sunt amet dolor quis ad Lorem excepteur minim commodo pariatur tempor eu. Ex laboris sunt ex minim consectetur aute amet ipsum irure esse incididunt. Ipsum ut esse culpa sint ea in ipsum elit exercitation sit pariatur non incididunt.",
  },
  {
    year: 2021,
    title: "QA Analyst",
    duration: "2 Years",
    details:
      "Deserunt proident occaecat sit cillum cupidatat. Nulla ut ea mollit aute reprehenderit. Anim sunt tempor mollit fugiat enim culpa ad fugiat do eiusmod. Officia velit commodo velit occaecat sint laboris ut pariatur labore. Voluptate sit sunt amet dolor quis ad Lorem excepteur minim commodo pariatur tempor eu. Ex laboris sunt ex minim consectetur aute amet ipsum irure esse incididunt. Ipsum ut esse culpa sint ea in ipsum elit exercitation sit pariatur non incididunt.",
  },
  {
    year: 2022,
    title: "QA Analyst",
    duration: "2 Years",
    details:
      "Deserunt proident occaecat sit cillum cupidatat. Nulla ut ea mollit aute reprehenderit. Anim sunt tempor mollit fugiat enim culpa ad fugiat do eiusmod. Officia velit commodo velit occaecat sint laboris ut pariatur labore. Voluptate sit sunt amet dolor quis ad Lorem excepteur minim commodo pariatur tempor eu. Ex laboris sunt ex minim consectetur aute amet ipsum irure esse incididunt. Ipsum ut esse culpa sint ea in ipsum elit exercitation sit pariatur non incididunt.",
  },
  {
    year: 2023,
    title: "QA Analyst",
    duration: "2 Years",
    details:
      "Deserunt proident occaecat sit cillum cupidatat. Nulla ut ea mollit aute reprehenderit. Anim sunt tempor mollit fugiat enim culpa ad fugiat do eiusmod. Officia velit commodo velit occaecat sint laboris ut pariatur labore. Voluptate sit sunt amet dolor quis ad Lorem excepteur minim commodo pariatur tempor eu. Ex laboris sunt ex minim consectetur aute amet ipsum irure esse incididunt. Ipsum ut esse culpa sint ea in ipsum elit exercitation sit pariatur non incididunt.",
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
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
}

export default Work;
