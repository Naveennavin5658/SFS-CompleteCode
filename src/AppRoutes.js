import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs.js";
import Alumni from "./Alumni.js";
import Gallery from "./Gallery.js";
import Home from "./Home.js";
import Results from "./Results.js";
import AlumniFoundation from "./AlumniFoundation";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/results" element={<Results />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path = "/sfs-alumni-foundation" element={<AlumniFoundation/>}/>
      </Routes>
    </div>
  );
};

export default AppRoutes;
