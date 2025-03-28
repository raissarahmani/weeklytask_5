import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { logout } from '../redux/slices/authSlice'

import Menu from "../assets/menu.png"

function AdminDashboard() {
const [IsMenuVisible, setIsMenuVisible] = useState(false)
const dispatch = useDispatch()

const handleLogout = () => {
    dispatch(logout())
}

function showMenu() {
    setIsMenuVisible((prev) => !prev)
}

  return (
    <header className='flex flex-row justify-between items-center bg-[#fff] py-[5vh] px-[10vw] sticky top-0 border-b border-solid border-[#DEDEDE] z-1'>
        <div className='w-1/2 md:w-3/20'>
            <img className='w-1/2 md:w-7/10' src="/Tickitz2.png" alt="Logo Tickitz"/>
        </div>
        <nav className='hidden md:flex flex-row justify-evenly w-3/5'>
            <p className='hover:text-[#1D4ED8] cursor-pointer'><Link to='/admin'>Dashboard</Link></p>
            <p className='hover:text-[#1D4ED8] cursor-pointer'><Link to='movie-list'>Movie</Link></p>
        </nav>
        <div className='hidden md:flex flex-row justify-right items-center w-1/4'>
            <button onClick={handleLogout} className='header-button mx-[0.5vw] bg-[red] text-[#fff] border-[red]'><Link to='/auth'>Sign Out</Link></button>
        </div>
        <div onClick={showMenu} className='md:hidden relative cursor-pointer'>
            <img src={Menu} alt="Menu"/>
            <div className={`${IsMenuVisible ? "visible" : "invisible"} absolute top-[5vh] right-0 shadow-lg bg-[#fff] py-[2vh] px-[5vw] rounded-lg w-[40vw]`}>
                <nav>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/admin'>Dashboard</Link></p>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='movie-list'>Movie</Link></p>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/auth'>Sign Out</Link></p>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default AdminDashboard
