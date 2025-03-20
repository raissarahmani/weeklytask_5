import React from 'react'
import { Link } from 'react-router'

import Dropdown from "../assets/dropdown.png"
import Search from "../assets/Search.png"
import Pp from "../assets/pp.png"
import Menu from "../assets/menu.png"

function AdminDashboard() {
  return (
    <header className='flex flex-row items-center bg-[#fff] py-[5vh] px-[10vw] sticky top-0 border-b border-solid border-[#DEDEDE] z-1'>
        <div className='w-3/20'>
            <img className='w-7/10' src="../../public/tickitz2.png" alt="Logo Tickitz"/>
        </div>
        <nav className='flex flex-row justify-evenly w-3/5 text-sm hover:text-[#1D4ED8] cursor-pointer'>
            <Link to='/admin'>Dashboard</Link>
            <Link to='movie-list'>Movie</Link>
        </nav>
        <div className='flex flex-row justify-right items-center w-1/4'>
            <div className='text-sm'>Location</div>
            <div className='flex flex-row justify-between items-center mx-[1vw]'>
                <img className='object-contain w-[2vw] h-[3vh]' src={Dropdown} alt=""/>
                <img className='object-contain w-[2vw] h-[3vh]' src={Search} alt=""/>
            </div>
            <div className='rounded-full'><img className='object-cover rounded-full h-[7vh] w-[7vh]' src={Pp} alt="Profile"/></div>
        </div>
        <div className='hidden'>
            <img src={Menu} alt="Menu"/>
            <div class="hamburger-menu">
                <nav>
                    <p>Dashboard</p>
                    <p>Movie</p>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default AdminDashboard
