import React from "react";
import Combain from "./Component/Combain";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Test from "./Dashboard/Test";
import Apointment from "./Dashboard/Apointment";
const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Combain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<Test />} />
        <Route path="/next-process" element={<Apointment />} />
      </Routes>

    </div>
  )
}
export default App

