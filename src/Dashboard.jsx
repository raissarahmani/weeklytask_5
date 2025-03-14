import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Home from './pages/Home';

function Dashboard() {
  return (
    <>
      <Header />
      <Home />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Dashboard
