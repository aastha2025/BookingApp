import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Component/Navbar'
import './App.css'
import MyHome from './Component/MyHome'
import Footer from './Component/Footer'
import Footer1 from './Component/Footer1'


// Lazy-loaded pages
const Flight = lazy(() => import('./Component/Flight/Flight'))
const Auth = lazy(() => import('./Entry/Auth'))
const Otp = lazy(() => import('./Entry/Otp'))
const Hotel = lazy(() => import('./Component/Hotels/Hotel'))
const NotFound = lazy(() => import('./Component/Errory/NotFound'))
const Car = lazy(() => import('./Component/Car/Car'))

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

function AppLayout() {
  const location = useLocation()
  // Define routes where footers should be hidden
  const noFooterRoutes = ['/hotel']
  const hideFooter = noFooterRoutes.includes(location.pathname.toLowerCase())

  return (
    <>
      <Navbar />

      <Suspense fallback={<div id="loader">Might be your Network is bad</div>}>
        <Routes>
          <Route path='/' element={<MyHome />} />
          <Route path='/flight' element={<Flight />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='*' element={<NotFound />} />
          <Route  path= "/car"  element={<Car/>}/>
        </Routes>
      </Suspense>

      {/* Conditionally render footers */}
      {!hideFooter && (
        <>
          {/* <Footer /> */}
          <Footer1 />
        </>
      )}
    </>
  )
}

export default App
