import React from "react";
import { Link } from "react-router-dom";
import no_image from '/no_image.avif'

const Cards = ({ carddata, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] ">
      {carddata.map((c, i) => (
        <Link className="sm:w-[25vh] mr-[5%] mb-[5%] " key={i}>
          <img 
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-[20vh] sm:w-[40vh] object-cover rounded"
            src={c.poster_path || c.backdrop_path ? `https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path
            }` : no_image}
            alt=""
          />
          <h1 className="text-lg hidden sm:block sm:text-2xl text-zinc-800 mt-3 font-sembold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
