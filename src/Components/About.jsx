import React from "react";
 

function About() {

  return (
    <>
      <h1 name="About Me" className=" text-4xl text-center py-8">
        About Me
      </h1>
      <div className=" py-10 px-6  ">
        <div className="md:flex justify-evenly">
          <div className="img md:w-[40%] pl-10 items-center">
            <img
              src="img2.png"
              alt=""
              className=" grayscale hover:scale-110 border border-white rounded-2xl w-[350px] h-[400px] hover:grayscale-0 cursor-pointer duration-500"
            />
          </div>
          <div className="skill md:w-[60%] space-y-10 space-x-4 pt-10 mr-14 leading-none tracking-tighter text-justify">
            <div className=" md:flex px-4 justify-evenly hover:scale-110 cursor-pointer duration-300">
              <h1 className="text-xl">Html & Css</h1>
              <div
                className={`ml-2 md:w-[70%] h-4 rounded-full bg-gradient-to-r from-[#b923e1] to-[#da7c25]`}
              ></div>
            </div>
            <div className=" md:flex justify-evenly hover:scale-110 cursor-pointer duration-300">
              <h1 className="text-xl">Tailwind Css</h1>
              <div
                className={`md:w-[70%] h-4 bg-gradient-to-r from-[#b923e1] to-[#da7c25] rounded-full`}
              ></div>
            </div>
            <div className=" md:flex justify-evenly hover:scale-110 cursor-pointer duration-300">
              <h1 className="text-xl">JavaScript</h1>
              <div
                className={`md:w-[65%] mr-[30px] h-4 bg-gradient-to-r from-[#b923e1] to-[#da7c25] rounded-full`}
              ></div>
            </div>
            <div className=" md:flex justify-evenly hover:scale-110 cursor-pointer duration-300">
              <h1 className="text-xl">React Js</h1>
              <div
                className={`md:w-[60%] mr-[65px] h-4 bg-gradient-to-r from-[#b923e1] to-[#da7c25] rounded-full`}
              ></div>
            </div>
            <div className=" md:flex justify-evenly hover:scale-110 cursor-pointer duration-300">
              <h1 className="text-xl">GSAP</h1>
              <div
                className={`md:w-[65%] mr-[25px] items-start h-4 bg-gradient-to-r from-[#b923e1] to-[#da7c25] rounded-full`}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-full md:pb-24 md:px-32 py-4 mt-12 md:flex justify-between">
          <div className="  text-center mb-8">
            <h1 className="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#c450e4] to-[#da7c25]">
              30+
            </h1>
            <p className="text-md ">Projects Completed</p>
          </div>
          <div className="  text-center mb-8">
            <h1 className="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#c450e4] to-[#da7c25]">
              8+
            </h1>
            <p className="text-md ">Months Of Experience</p>
          </div>
          <div className="text-center mb-8 ">
            <h1 className="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#c450e4] to-[#da7c25]">
              15+
            </h1>
            <p className="text-md ">Happy Clients</p>
          </div>
        </div>
      </div>
      <hr className="mx-10" />
    </>
  );
}

export default About;
