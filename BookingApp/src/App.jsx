import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHome from './Component/MyHome'
import Navbar from './Component/Navbar';
import Flight from './Component/Flight/Flight'
import Authy from './Entry/Auth'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MyHome />} />
          <Route path='/flight' element={<Flight />} />
          <Route path='/auth' element={<Authy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;