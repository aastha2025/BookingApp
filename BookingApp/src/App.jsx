import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom'
import Navbar from './Component/Navbar'
import './App.css'
import MyHome from './Component/MyHome'
import Footer1 from './Component/Footer1'
import './Component/Flight/global.module.css';
import Taxi from "./Component/Taxi/Taxi";

// Lazy-loaded pages
const Flight = lazy(() => import('./Component/Flight/Flight'))
const Auth = lazy(() => import('./Entry/Auth'))
const Otp = lazy(() => import('./Entry/Otp'))
const Hotel = lazy(() => import('./Component/Hotels/Hotel'))
const NotFound = lazy(() => import('./Component/Errory/NotFound'))
const Car = lazy(() => import('./Component/Car/Car'))
const Attraction  = lazy(() => import('./Component/Attraction/Attraction'));
const ChildPage = lazy(() => import('./Component/ChildPages/PageDetail'));

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
  
  // Check if current route is the NotFound page by matching against all defined routes
  const isNotFoundPage = ![
    '/',
    '/flight',
    '/auth',
    '/otp',
    '/hotel',
    '/car',
    '/Attractions',
    '/taxi',
    '/child'
  ].some(route => matchPath(location.pathname, route))

  return (
    <>
      {/* Don't show navbar for NotFound page */}
      {!isNotFoundPage && <Navbar />}

      <Suspense fallback={<div id="loader"></div>}>
        <Routes>
          <Route path='/' element={<MyHome />} />
          <Route path='/flight' element={<Flight />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/car" element={<Car/>}/>
          <Route path="/Attractions" element={<Attraction />}/>
          <Route path="/taxi" element={<Taxi/>}/>
          <Route path='/child' element={<ChildPage />} />
        </Routes>
      </Suspense>

      {/* Conditionally render footers - hide for NotFound page and noFooterRoutes */}
      {!isNotFoundPage && !hideFooter && <Footer1 />}
    </>
  )
}

export default App