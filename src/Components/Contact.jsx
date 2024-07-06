import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "24f96a7c-9c94-4d29-be7e-0b6e2b182a87");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <>
      <h1 name="Contact" className="text-4xl text-center py-10">
        Contact
      </h1>
      <div className=" md:flex relative overflow-hidden">
        <div className="left space-y-14  md:w-1/2 h-[500px]">
          <h1 className=" absolute left-[7%] text-6xl bg-clip-text bg-gradient-to-r from-[#c450e4] to-[#da7c25] text-transparent pt-16">
            Get In Touch
          </h1>
          <div className=" absolute left-[7%] text-2xl top-[20%] flex space-x-2">
            <FaLinkedin className="text-2xl" />
            <a
              href="https://pk.linkedin.com"
              target="_blank"
              className="underline"
            >
              https://pk.linkedin.com
            </a>
          </div>
          <div className=" absolute left-[7%] text-2xl top-[27%] flex space-x-2">
            <FaInstagramSquare className="text-2xl" />
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="underline"
            >
              https://www.Instagram.com
            </a>
          </div>
          <div className=" absolute left-[7%] text-2xl  top-[35%] flex space-x-2">
            <FaFacebookSquare className="text-2xl" />
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="underline"
            >
              https://www.facebook.com
            </a>
          </div>
        </div>
        <div className="right pl-8 pt-8 md:w-1/2 h-[500px] space-y-4">
          <form action="" onSubmit={onSubmit}>
            <h1 className="text-xl text-slate-300">Full Name</h1>
            <input
              type="text"
              name="name"
              className="w-[300px] mb-4 rounded h-8 outline-none px-2 text-black"
              placeholder="full name"
            />
            <h1 className="text-xl text-slate-300">Email</h1>
            <input
              type="email"
              name="email"
              className="w-[300px] mb-4 rounded h-8 outline-none px-2 text-black"
              placeholder="Email"
            />
            <h1 className="text-xl text-slate-300">massege</h1>
            <textarea
              name="massege "
              className="w-[300px] mb-4  rounded h-24 outline-none px-2 text-black"
              placeholder="massege for me"
            />
            <br />
            <button
              type="submit"
              className="border-2 ease-linear hover:bg-gradient-to-r from-[#c450e4] to-[#da7c25] border-white hover:scale-110 duration-300 mt-3 rounded-full px-4 py-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr className="mx-10" />
    </>
  );
}
