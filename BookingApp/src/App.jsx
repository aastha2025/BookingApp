import React from 'react'
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Offers from './Component/Offers';
import Property from './Component/Property';
import Destination from './Component/Destination';
import Trip from './Component/Trip';
import India from './Component/India';
import Stay from './Component/Stay';
import Homelove from './Component/Homelove';
import Unique_prop from './Component/Unique_prop';

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
      <Homelove />
      <Unique_prop />
    </div>
  );
}

export default App;
