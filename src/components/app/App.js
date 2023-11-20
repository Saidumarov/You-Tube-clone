import { Box } from "@mui/material";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Min, Chanel, VideoDetail, Search, Navbar } from "../index";
function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Min />} />
        <Route path="/channel/:id" element={<Chanel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
      <Outlet />
    </Box>
  );
}

export default App;
