import React from 'react'
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Offers from './Component/Offers';
import Property from './Component/Property';
import Destination from './Component/Destination';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Offers/>
      <Property />
      <Destination />
    </div>
  );
}

export default App;
