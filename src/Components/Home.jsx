import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";


function Home() {

  return (
    <>
      <div
        name="Home"
        className=" relative w-full md:h-[520px] h-screen text-center"
      >
        <div className=" absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 sm:px-6  py-12 px-16">
          <div className="w-full sm:mt-5 flex justify-center items-center">
            <img
              src="img2.png"
              alt="image"
              className="image w-[220px] bg-white h-[220px] border-[3px] border-black  rounded-full"
            />
          </div>
          <h1 className="md:text-[4vw] text-3xl leading-none">
            <span className="text text-transparent  bg-clip-text bg-gradient-to-r from-[#b923e1] to-[#da7c25]">
              I,m{" "}
              <ReactTyped
                strings={["Khizar,", "Coder,", "Programer,"]}
                typeSpeed={90}
                backSpeed={90}
                loop
              />
              <br />
            </span>
            <span className="text"> frontend web developer</span>
          </h1>
          <p className="text text-sm text-justify tracking-tighter leading-none mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            cumque magnam distinctio reprehenderit ex placeat beatae, officiis
            debitis repudiandae doloribus.
          </p>
          <div className="text flex-col space-y-5 sm:space-x-4 mt-4">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              activeClass="active"
              className=" px-2 py-2 border-[1px] cursor-pointer border-white rounded-full hover:shadow-lg hover:shadow-white  hover:transition-all bg-gradient-to-r from-[#b923e1] to-[#da7c25] hover:from-[#6c1884] hover:to-[#875220] hover:duration-500 hover:scale-110 "
            >
              Contact With Me
            </Link>
            <button className="border-[1px] px-7 py-2 rounded-full duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white bg-gradient-to-r text-transparent bg-clip-text from-[#b923e1] to-[#da7c25]">
              My Resume
            </button>
          </div>
        </div>
      </div>
      <hr className="mx-10" />
    </>
  );
}

export default Home;
