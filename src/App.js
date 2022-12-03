import React from 'react';
import './App.css';
import BlockNav from './Components/Block1'
import Block2 from './Components/Block2/Block2';
import Platform from './Components/Block3/Platform';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App ">
      <BlockNav />
      <Block2/>
      <Platform/>
      <Footer />
    </div>
  );
}

export default App;
