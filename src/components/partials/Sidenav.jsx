import React from "react";
import { Link } from "react-router-dom";

const Sidenav = ({menu}) => {
  return (
    <>
      <div
        className={`sm:w-[20%] ${
          menu ? "blcok" : "hidden"
        }  sm:block sm:h-screen h-[90vh] shadow z-99`}
      >
        <div className="">
         <h1 className="text-3xl flex items-center gap-2 font-bold p-5">
        <i className="text-[#6556CD] pb-2 ri-tv-fill"></i>
        <span className="text-3xl text-black mb-1">MovieApp</span>
      </h1>
      <nav className="flex flex-col ">
        <h1 className="text-white font-semibold pb-2">New Feeds</h1>
        <Link to='/trending' className="text-zinc-400 font-semibold py-3 px-5 rounded-lg duration-300 hover:text-white hover:bg-[#6556CD]">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link to='/popular' className="text-zinc-400 font-semibold py-3 px-5 rounded-lg duration-300 hover:text-white hover:bg-[#6556CD]">
          <i className="ri-team-fill"></i> Popular
        </Link>
        <Link to='/movies' className="text-zinc-400 font-semibold py-3 px-5 rounded-lg duration-300 hover:text-white hover:bg-[#6556CD]">
          <i className="ri-movie-fill"></i> Movies
        </Link>
        <Link to='/tv' className="text-zinc-400 font-semibold py-3 px-5 rounded-lg duration-300 hover:text-white hover:bg-[#6556CD]">
          <i className="ri-slideshow-2-fill"></i> Tv Shows
        </Link>
        <Link className="text-zinc-400 font-semibold py-3 px-5 mb-2 rounded-lg duration-300 hover:text-white hover:bg-[#6556CD]">
          <i className="ri-user-star-fill"></i> Star
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col ">
        <h1 className="text-white font-semibold pb-2 mt-2">Info.</h1>
        <Link className="text-zinc-400 font-semibold py-3 px-5 rounded-lg duration-300 hover:text-white hover:bg-[#6556CD]">
          <i className="ri-information-fill"></i> About
        </Link>
        <Link className="text-zinc-400 font-semibold py-3 px-5 rounded-lg duration-300 hover:text-white hover:bg-[#6556CD]">
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
      </div>
      </div>
    </>
  );
};

export default Sidenav;
