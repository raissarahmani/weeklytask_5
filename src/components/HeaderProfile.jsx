import { useState } from 'react'
import { Link } from 'react-router'

import Dropdown from '../assets/dropdown.png'
import Search from '../assets/Search.png'
import Pp from '../assets/pp.png'
import Menu from '../assets/menu.png'

function HeaderProfile() {
    const [IsMenuVisible, setIsMenuVisible] = useState(false)

    function showMenu() {
        setIsMenuVisible((prev) => !prev)
    }

  return (
    <header className='flex flex-row justify-between items-center bg-[#fff] py-[5vh] px-[10vw] sticky top-0 z-[10]'>
        <div className='w-1/2 md:w-3/20'>
            <img className='w-1/2 md:w-7/10' src="/tickitz2.png" alt="Logo Tickitz" />
        </div>
        <nav className='hidden md:flex flex-row justify-evenly w-3/5'>
            <p className='hover:text-[#1D4ED8]'><Link to='/'>Home</Link></p>
            <p className='hover:text-[#1D4ED8]'><Link to='now-playing'>Movie</Link></p>
            <p className='hover:text-[#1D4ED8]'><Link to='/now-playing/detail'>Buy Ticket</Link></p>
        </nav>
        <div className='hidden md:flex flex-row justify-right items-center w-1/4'>
            <div>Location</div>
            <div className='flex flex-row justify-between items-center mx-[1vw]'>
                <img className='object-contain w-[2vw] h-[3vh]' src={Dropdown} alt=""/>
                <img className='object-contain w-[2vw] h-[3vh]' src={Search} alt=""/>
            </div>
            <div className='rounded-full'><Link to='/profile-page'><img className='object-cover h-[7vh] w-[7vh] rounded-full' src={Pp} alt="Profile"/></Link></div>
        </div>
        <div onClick={showMenu} className='md:hidden relative cursor-pointer'>
            <img src={Menu} alt="Menu" />
            <div className={`${IsMenuVisible ? "visible" : "invisible"} absolute top-[5vh] right-0 shadow-lg bg-[#fff] py-[2vh] px-[5vw] rounded-lg w-[40vw]`}>
                <nav className='cursor-pointer'>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/'>Home</Link></p>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='now-playing'>Movie</Link></p>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/now-playing/detail'>Buy Ticket</Link></p>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/profile-page'>Profile</Link></p>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default HeaderProfile
