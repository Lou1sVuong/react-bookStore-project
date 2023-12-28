import React from 'react'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import NavDetail from './Nav/NavDetail/NavDetail'

function MainLayout2() {
  return (
    <>
      <NavDetail/>
      <Outlet />
      <Footer />
    </>

  )
}

export default MainLayout2