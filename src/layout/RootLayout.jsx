import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../Componats/shared/Nav'
import Footer from '../Componats/shared/Footer'

const RootLayout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout