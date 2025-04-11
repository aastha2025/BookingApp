import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHome from './Component/MyHome'
import Navbar from './Component/Navbar';
import Flight from './Component/Flight/Flight';
import Auth from './Entry/Auth';
import Otp from './Entry/Otp';
import Hotel from './Component/Hotels/Hotel';
import NotFound from './Component/Errory/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MyHome />} />
          <Route path='/flight' element={<Flight />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/Otp' element={<Otp />} />
          <Route path='/hotel' element = {<Hotel/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;