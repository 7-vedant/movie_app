import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "Movies | Home";

  const [menu, setMenu] = useState(false);
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const handleClick = () => {
    return menu ? setMenu(false) : setMenu(true);
  };

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      const { results } = data;
      let randomdata = results[(Math.random() * results.length).toFixed()];
      // console.log(results)
      setwallpaper(randomdata);
    } catch (error) {
      console.log(error);
    }
  };
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      const { results } = data;
      settrending(results);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(trending)

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <div className="">
        <div className="sm:flex flex-row-reverse w-full ">
          <Topnav Click={handleClick} />
          <Sidenav menu={menu} />
        </div>
        <div
          className={`${
            menu ? "hidden" : "sm:absolute"
          } sm:absolute sm:top-[10%] overflow-y-auto  sm:left-[20%] w-full sm:min-w-[80vw] sm:w-[80%] h-full `}
        >
          <Header wallpaperdata={wallpaper} />
          <div className="p-5  w-[80vw] ">
            <div className="mb-5 flex justify-between items-center">
              <h1 className="text-3xl text-zinc-400 font-semibold">Trending</h1>
              <Dropdown
                title="Filter"
                options={["tv", "movie", "all"]}
                func={(e) => setcategory(e.target.value)}
              />
            </div>

            <HorizontalCards trendingdata={trending} />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
