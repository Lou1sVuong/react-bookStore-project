import React from 'react'
import NavDetail from './Nav/NavDetail/NavDetail'
import Footer from './Footer/Footer'
import BlogPage from '../pages/BlogPage/BlogPage'

function MainLayout4() {
  return (
    <div>
      <NavDetail/>
      <BlogPage></BlogPage>
      <Footer/>
    </div>
  )
}

export default MainLayout4
