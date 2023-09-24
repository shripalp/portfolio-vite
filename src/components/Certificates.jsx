import CertificateItem from "./CertificateItem";
const data = [
  {
    title: "HarvardX CS50x: Introduction to Computer Science",
    link: "https://courses.edx.org/certificates/560ad8abccb54f7ca8a095f56181aa22",
    description:
      "Harvard University's introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming.",
  },
  {
    title: "HarvardX CS50P: Introduction to Programming with Python",
    link: "https://courses.edx.org/certificates/67d4691311244bc0898807bd2c8e9a49",
    description:
      "An introduction to programming using a language called Python. Learn how to read and write code as well as how to test and “debug” it. Designed for students with or without prior programming experience who’d like to learn Python specifically. Learn about functions, arguments, and return values (oh my!); variables and types; conditionals and Boolean expressions; and loops. Learn how to handle exceptions, find and fix bugs, and write unit tests; use third-party libraries; validate and extract data with regular expressions; model real-world entities with classes, objects, methods, and properties; and read and write files. Hands-on opportunities for lots of practice. Exercises inspired by real-world programming problems. ",
  },
  {
    title:
      "HarvardX: Computer Science for Python Programming Professional Certificate",
    link: "https://courses.edx.org/certificates/560ad8abccb54f7ca8a095f56181aa22",
    description: "Pyhton programming professional certificate",
  },

  {
    title: "University of Helsinki:  Full Stack Open",
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/ec95b7318cf7e3b928dd1083ee14a1ee",
    description:
      "Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.",
  },
  {
    title: "IBM: Data Science Professional Certificate",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/JABVQ3R3RDVM",
    description:
      "The certificate earner is ready for a career in data science with demonstrated ability to solve for real-world problems. They can apply Data Science methodology - work with Jupyter notebooks - create Python apps - access relational databases using SQL & Python - use Python libraries to generate data visualizations - perform data analysis using Pandas - construct & evaluate Machine Learning (ML) models using Scikit-learn & SciPy and apply data science & ML techniques to real location data sets.",
  },
  {
    title: "Meta: Front End Deveoper",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XQ6NNUB5B3LP",
    description: "Front end technologies such as React, Chakra UI",
  },
  {
    title: "Google:IT Support Professional Certificate",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q46BWJ47GFKX",
    description: "IT support certificate",
  },
];

function Certificates() {
  return (
    <div id="certificates" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-6">
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
