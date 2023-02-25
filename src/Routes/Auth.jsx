import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../page/Home';
import Menu from '../page/Menu';
import Gallery from '../page/Gallery';
import Contact from '../page/Contact';
import NotfoundPage from '../page/PageNotFound';


const Auth = () => {
  return (
    <div>


      <BrowserRouter>

        <Routes>

          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="*" element={<NotfoundPage />}></Route>


        </Routes>




      </BrowserRouter>



    </div>


  )
}

export default Auth