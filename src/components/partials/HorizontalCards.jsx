import React from "react";
// import Dropdown from "./Dropdown";

const HorizontalCards = ({ trendingdata }) => {
  return (
    
      <div className="w-[90vw] sm:w-full flex h-[60vh] flex-col sm:flex-row  sm:overflow-y-hidden">
        {trendingdata.map((d, i) => (
          <div
            key={i}
            className="min-w-[20%] rounded-md   mr-5 mb-5 shadow-lg"
          >
            <img
              className=" sm:w-full sm:h-[55%] object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <div className="text-black p-3">
              <h1 className="mt-2 text-xl  font-bold ">
                {d.title || d.name || d.original_name || d.original_title}
              </h1>
              <p className=" text-zinc-600 mt-3 mb-3">
                {d.overview.slice(0, 20)}
                <span className="text-zinc-500">...more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default HorizontalCards;
