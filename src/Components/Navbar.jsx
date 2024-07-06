import React, { useState, useEffect } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { RiCloseLargeLine} from "react-icons/ri";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };
   



  const Links = ["Home", "About Me", "Projects"];


  return (
    <>
      <nav className=" sticky z-10  top-0 flex justify-between items-center px-10 py-3">
        <div className="Logo leading-none tracking-tight">
          <h1 className="text-xl">
            Khiza
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b923e1] to-[#da7c25]">
              R
            </span>
          </h1>
          <p className="text-sm">Web developer</p>
        </div>
        <div className="tags md:flex space-x-6 hidden">
          <ul className=" flex justify-between space-x-10 py-2">
            {Links.map((link, index) => (
              <Link
                to={link}
                spy={true}
                smooth={true}
                delay={50}
                offset={20}
                duration={800}
                activeClass="active"
                key={index}
                className={`text-xl cursor-pointer hover:text-transparent duration-300 hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#b923e1] hover:to-[#da7c25]`}
              >
                {link}
              </Link>
            ))}
          </ul>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
            activeClass="active"
            className="tags px-2 py-2 border-[1px] border-white rounded-full cursor-pointer hover:transition-all bg-gradient-to-r from-[#b923e1] to-[#da7c25] hover:from-[#6c1884] hover:to-[#875220] hover:duration-500 hover:scale-110 "
          >
            Contact With Me
          </Link>
        </div>
        <div className="md:hidden">
          {toggle ? (
            <RiCloseLargeLine
              onClick={toggleMenu}
              className="text-2xl md:hidden cursor-pointer"
            />
          ) : (
            <TiThMenuOutline
              onClick={toggleMenu}
              className="text-2xl md:hidden cursor-pointer"
            />
          )}
        </div>
      </nav>

      {/* responsive navbar */}

      {toggle && (
        <div className="responsivNav  w-[100%] h-[510px]  transition-all   duration-500 ease-in-out ">
          <ul className="absolute pl-[180px] pt-32 space-y-5">
            <Link
             to="Home"
             spy={true}
             smooth={true}
             offset={20}
             duration={500}
             activeClass="active"
            className=" cursor-pointer  flex hover: ">Home</Link>
            <Link
             to="About Me"
             spy={true}
             smooth={true}
             offset={20}
             duration={500}
             activeClass="active"
            className=" cursor-pointer flex hover: ">About Me</Link>
            <Link 
             to="Projects"
             spy={true}
             smooth={true}
             offset={20}
             duration={500}
             activeClass="active"
            className=" cursor-pointer flex hover: ">Projects</Link>
            <Link 
             to="Contact"
             spy={true}
             smooth={true}
             offset={20}
             duration={500}
             activeClass="active"
            className=" cursor-pointer flex hover: ">Contact Me</Link>
          </ul>
        </div>
      )}
      <hr className="mx-10" />
    </>
  );
};

export default Navbar;
