import { Route, Routes } from "react-router-dom";
import React from 'react'
import Registration from './Registration'
import Vendor from "./Vendor";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/vendor" element={<Vendor />}>
        </Route>
      </Routes>
  )
}

export default App