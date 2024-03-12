// import { data } from "autoprefixer";
// import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ wallpaperdata }) => {
  // console.log(wallpaperdata);
  return (
    <div
      className="w-[100vw] sm:w-[80vw] h-[60vh] flex flex-col justify-end items-start
       p-[4%]"
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.4),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          wallpaperdata.backdrop_path || wallpaperdata.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl sm:text-5xl font-bold text-white">
        {wallpaperdata.name ||
          wallpaperdata.orignal_title ||
          wallpaperdata.original_name ||
          wallpaperdata.title}
      </h1>
      <p className="text-zinc-400 font-semibold w-[90%] sm:w-[70%]">
        {wallpaperdata.overview.slice(0, 200)}
        <Link className="text-blue-500">...more</Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill pr-2"></i>
        {wallpaperdata.release_date || "No Information"} 
        <i className= "pl-5 text-yellow-500 ri-album-fill pr-2"></i>
        {wallpaperdata.media_type}
      </p>
      <Link className="mt-2 p-3 bg-[#6556CD] font-semibold text-white rounded-md">Watch Trailer</Link>
    </div>
  );
};

export default Header;
