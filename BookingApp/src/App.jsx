import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHome from './Component/MyHome'
import Navbar from './Component/Navbar';
import Auth from './Entry/Auth';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MyHome />} />
          <Route path='/auth' element={<Auth />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;