import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Body = () => {
  return (
    <div className="overflow-x scrollbar-hide">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Body;
