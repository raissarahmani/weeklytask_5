import React from 'react'

import Menu from '../assets/Menu.png'

function Header() {
  return (
    <header className='flex flex-row items-center bg-[#fff] py-[5vh] px-[10vw] sticky top-0 z-[10]'>
        <div className='w-3/20'>
            <img className='w-7/10' src="../../public/tickitz2.png" alt="Logo Tickitz" />
        </div>
        <nav className='flex flex-row justify-evenly w-3/5'>
            <p>Home</p>
            <p>Movie</p>
            <p>Buy Ticket</p>
        </nav>
        <div className='w-1/4 flex flex-row justify-right'>
            <button className='header-button mx-[0.5vw] bg-[#fff] text-[#1D4ED8]'>Sign In</button>
            <button className='header-button mx-[0.5vw] bg-[#1D4ED8] text-[#fff]'>Sign Up</button>
        </div>
        <div className='hidden'>
            <img src={Menu} alt="Menu" />
            <div class="hamburger-menu">
                <nav>
                    <p>Home</p>
                    <p>Movie</p>
                    <p>Buy Ticket</p>
                    <p>Sign In</p>
                    <p>Sign Up</p>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
