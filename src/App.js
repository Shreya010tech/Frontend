import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      {/* Routes Setup */}
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
    </>
  );
};

export default App;
