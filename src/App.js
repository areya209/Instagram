import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Login from './compontents/Login/index';
import SignUp from './compontents/SignUp';
import Home from './compontents/Home';
import Profile from './compontents/Profile';
import Spinner from './compontents/Spinner'

function App() {
  return (
    <>
      {/* <Spinner /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
