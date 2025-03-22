import React from 'react'
import { Link } from 'react-router'

import Dropdown from '../assets/dropdown.png'
import Search from '../assets/Search.png'
import Pp from '../assets/pp.png'
import Menu from '../assets/menu.png'

function HeaderProfile() {
  return (
    <header className='flex flex-row items-center bg-[#fff] py-[5vh] px-[10vw] sticky top-0 z-[10]'>
        <div className='w-3/20'>
            <img className='w-7/10' src="../../public/tickitz2.png" alt="Logo Tickitz" />
        </div>
        <nav className='flex flex-row justify-evenly w-3/5'>
            <Link to='/'>Home</Link>
            <Link to='now-playing'>Movie</Link>
            <Link to='/now-playing/detail'>Buy Ticket</Link>
        </nav>
        <div className='flex flex-row justify-right items-center w-1/4'>
            <div>Location</div>
            <div className='flex flex-row justify-between items-center mx-[1vw]'>
                <img className='object-contain w-[2vw] h-[3vh]' src={Dropdown} alt=""/>
                <img className='object-contain w-[2vw] h-[3vh]' src={Search} alt=""/>
            </div>
            <div className='rounded-full'><Link to='/profile-page'><img className='object-cover h-[7vh] w-[7vh] rounded-full' src={Pp} alt="Profile"/></Link></div>
        </div>
        <div className='hidden'>
            <img src={Menu} alt="Menu" />
            <div class="hamburger-menu">
                <nav>
                    <p>Home</p>
                    <p>Movie</p>
                    <p>Buy Ticket</p>
                    <p>Profile</p>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default HeaderProfile
