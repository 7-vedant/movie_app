import axios from "../utils/axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Topnav from "./partials/Topnav";
import { useEffect } from "react";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Trending = () => {

  document.title = "MovieApp | Trending";
  const navigate = useNavigate();

  const [catgegory, setcatgegory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${catgegory}/${duration}?page=${page}`);
      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshHandler =  () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending()
    }
  };

  useEffect(() => {
    refreshHandler()
  }, [catgegory, duration]);

  return trending.length > 0 ? (
    <div className='w-screen h-screen'>
<div className=" w-[98%]  flex items-center border-b-[1px] border-zinc-400">
        <h1 className="sm:block hidden text-2xl text-zinc-400 font-bold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-s-fill"
          ></i>
          Trending
        </h1>

        <Topnav Click={handleClick} />
        <div className="flex gap-5">
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcatgegory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasmore}
        loader={<h1>Loading</h1>}
      >
        <Cards carddata={trending} title={catgegory} />
      </InfiniteScroll>
    </div>
  ) : (<Loading />)
}

export default Trending