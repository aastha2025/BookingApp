import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHome from './Component/MyHome'
import Navbar from './Component/Navbar';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MyHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;