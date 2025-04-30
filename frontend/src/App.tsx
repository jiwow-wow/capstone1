import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Mainpage from './pages/Mainpage/Mainpage';
import Userform from './pages/Userform/UserInfoForm'

import './styles/App.css';



function App() {
  
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Mainpage/>}/>
        <Route path = "/login" element ={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
