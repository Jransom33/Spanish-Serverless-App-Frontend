import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hero from "./Pages/Hero.component.jsx";
import {Routes, Route} from "react-router-dom";


import Lesson from "./Pages/Lesson.page.jsx";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Hero className='my-0'/>}/>
      <Route path='Lesson' element={<Lesson/>}/>
    </Routes>
  );
}

export default App;
