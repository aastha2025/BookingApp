import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import './App.css'



const MyHome = lazy(() => import('./Component/MyHome'));

const Flight = lazy(() => import('./Component/Flight/Flight'));
const Auth = lazy(() => import('./Entry/Auth'));
const Otp = lazy(() => import('./Entry/Otp'));
const Hotel = lazy(() => import('./Component/Hotels/Hotel'));
const NotFound = lazy(() => import('./Component/Errory/NotFound'))


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<div id="loader">Might be your Network is bad</div>}>
          <Routes>
            <Route path='/' element={<MyHome />} />
            <Route path='/flight' element={<Flight />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/Otp' element={<Otp />} />
            <Route path='/hotel' element={<Hotel />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
      </Router>
    </div>
  );
}

export default App;