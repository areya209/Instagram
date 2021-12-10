import React from 'react';
import './App.css';
// import { faHome, faPaperPlane, faPlusSquare, faCompass, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Routes } from "react-router-dom";

import Login from './compontents/Login/index';
import SignUp from './compontents/SignUp';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
