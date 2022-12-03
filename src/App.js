import React from 'react';
import './App.css';
import BlockNav from './Components/Block1'
import Block2 from './Components/Block2/Block2';
import Platform from './Components/Block3/Platform';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';


function LandingPage(){
  return(
    <div className="landingPage ">
      <BlockNav />
      <Block2/>
      <Platform/>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="App ">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
