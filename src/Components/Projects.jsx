import React from "react";
function Projects() {
  const data = [
    {
      So_no: 1,
      desc: "React Project",
      para1: `It's a React Animated Project`,
      readMore: "Read More",
    },
    {
      So_no: 2,
      desc: "Bcakground Changer",
      para1: `It's a background changing project in react`,
      readMore: "Read More",
    },
    {
      So_no: 3,
      desc: "Clone",
      para1: `It's a React Animated Project`,
      readMore: "Read More",
    },
    {
      So_no: 4,
      desc: "Pet Shop Clone",
      para1: `It's a Clone of a pet shop`,
      readMore: "Read More",
    },
    {
      So_no: 5,
      desc: "Birthday Card ",
      para1: `It's a birthday wish card`,
      readMore: "https://khizarazam.github.io/birthday-card/",
    },
  ];

  return (
    <>
      <h1 name="Projects" className=" py-7 text-center text-4xl">
        Projects
      </h1>
      <div className="card items-center  ml-20   py-10 md:grid md:grid-cols-3 md:space-y-0 space-y-5 gap-y-16">
        {data.map(({ So_no, desc, para1, readMore }) => (
          <div className="w-[280px] p-6 space-y-2 relative   hover:scale-110 cursor-pointer duration-300 rounded-3xl h-[250px] border-2 border-white">
            <h1 className="text-xl font-semibold">{So_no}.</h1>
            <h3 className="text-2xl bg-clip-text bg-gradient-to-r from-[#c450e4] to-[#da7c25] text-transparent">
              {desc}
            </h3>
            <p className="txet-md tracking-tight">{para1}</p>
            <a
              href={readMore}
              target="_blank"
              className="text-xl absolute left-[55%] top-[70%] underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
      <hr className="mx-10" />
    </>
  );
}

export default Projects;
