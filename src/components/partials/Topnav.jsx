import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import no_image from "/no_image.avif";

const Topnav = ({ Click }) => {

    const [query, setquery] = useState("");
  const [searchs, setsearchs] = useState(null);

  // console.log(query);

  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      const { results } = data;
      // console.log(results)
      setsearchs(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);



  return (
    <>
      <div className="w-[100%] h-[10vh] border-b-[1px] border-zinc-400 flex justify-between px-10 items-center">
        <div className="flex items-center">
          <input
            onChange={(e) => setquery(e.target.value)}
            className="rounded-full outline-none shadow-md px-1 sm:px-5 py-2 sm:ml-[5rem] mr-[1px] font-semibold"
            type="text"
            placeholder="Search"
          />
          {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ml-5 text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}
        </div>
        <div className="absolute z-40 bg-zinc-300 w-[100%] sm:w-[50%] right-[0%] sm:right-[28%] max-h-screen sm:max-h-[80vh] rounded-md top-[10%] overflow-hidden sm:overflow-auto">
        {searchs &&
          searchs.map((s, i) => (
            <Link className="flex justify-start items-center border-b-2 border-zinc-100 w-full p-10 hover:text-black hover:bg-zinc-300">
                <div className="flex items-center justify-between">
                <img
                  className="w-[7vh] h-[7vh] sm:w-[15vh] sm:h-[15vh] object-cover rounded mr-5 shadow-lg"
                  src={
                    s.backdrop_path || s.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          s.backdrop_path || s.profile_path
                        }`
                      : no_image
                  }
                  alt=""
                />
                <span className="text-lg font-semibold text-zinc-700 ">
                {s.name || s.orignal_title || s.original_name || s.title}
                </span>
                </div>
            </Link>
            ))}
        </div>
        <i
          onClick={() => Click()}
          className="ri-menu-line text-2xl sm:hidden"
        ></i>
      </div>
    </>
  );
};

export default Topnav;
