import React from 'react'
import { Outlet } from 'react-router';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
const RootLayout = () => {
  return (
    <div className=''>
      <NavBar />
      <main className='flex flex-col min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout;
