import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarSearch from "./components/CarSearch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/page/:page" element={<CarSearch />} />
        <Route path="/" element={<CarSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
