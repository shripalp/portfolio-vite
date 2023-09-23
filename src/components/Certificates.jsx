import CertificateItem from "./CertificateItem";
const data = [
  {
    title: "QA Analyst",
    link: "https://www.cnn.com",
    description: "abc",
  },
  {
    title: "QA Analyst",
    link: "link",
    description: "abc",
  },
  {
    title: "QA Analyst",
    link: "link",
    description: "abc",
  },
  {
    title: "QA Analyst",
    link: "link",
    description: "abc",
  },
];

function Certificates() {
  return (
    <div id="certificates" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Certificates
      </h1>
      {data.map((item, idx) => (
        <CertificateItem
          key={idx}
          title={item.title}
          link={item.link}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Certificates;
