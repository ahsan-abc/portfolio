import React from 'react'
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Me from './components/Me'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Admin from './components/Admin'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path = "/" element = {<Me/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/skill" element = {<Skill/>}/>
        <Route path="/admin-lock" element={<Admin/>} />
        <Route path="/*" element={<h1>page not founded</h1>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
