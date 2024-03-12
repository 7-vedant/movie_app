import React from "react";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Tv from "./components/Tv";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
      </Routes>
    </div>
  );
}

export default App;
