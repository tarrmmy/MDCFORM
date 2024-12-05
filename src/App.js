import { Route, Routes } from "react-router-dom";
import React from "react";
import Registration from "./Registration";
import Vendor from "./Vendor";
import LandingPage from "./Landing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/vendor" element={<Vendor />}></Route>
    </Routes>
  );
};

export default App;
