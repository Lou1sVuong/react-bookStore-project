import React from 'react'
import Nav from './Nav/NavIndex/Nav'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <Nav/>
      <Outlet />
      <Footer />
    </>

  )
}

export default MainLayout