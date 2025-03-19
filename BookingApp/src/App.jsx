import React from 'react'
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Offers from './Component/Offers';
import Property from './Component/Property';
import Destination from './Component/Destination';
import Trip from './Component/Trip';
import India from './Component/India';
import Stay from './Component/Stay';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Offers/>
      <Property />
      <Destination />
      <Trip />
      <India />
      <Stay />
    </div>
  );
}

export default App;
