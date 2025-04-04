import { useState } from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { resetData } from '../redux/slices/bookingSlice'

import Pp from '../assets/pp.png'
import Menu from '../assets/menu.png'

function Header() {
const [IsMenuVisible, setIsMenuVisible] = useState(false)
const dispatch = useDispatch()
const user = useSelector((state) => state.auth.user)

const handleLogout = () => {
    dispatch(logout())
    dispatch(resetData())
}

function showMenu() {
    setIsMenuVisible((prev) => !prev)
}

  return (
    <header className='flex flex-row justify-between items-center bg-[#fff] py-[5vh] px-[10vw] sticky top-0 z-[10]'>
        <div className='w-1/2 md:w-3/20'>
            <img className='w-1/2 md:w-7/10' src="/Tickitz2.png" alt="Logo Tickitz" />
        </div>
        <nav className='hidden md:flex flex-row justify-evenly w-3/5'>
            <p className='hover:text-[#1D4ED8]'><Link to='/'>Home</Link></p>
            <p className='hover:text-[#1D4ED8]'><Link to='now-playing'>Movie</Link></p>
            <p className='hover:text-[#1D4ED8]'><Link to='/now-playing/detail'>Buy Ticket</Link></p>
        </nav>
        <div className='hidden md:block w-1/4'>
            {user ? ( 
            <div onClick={showMenu} className='relative left-3/4'>
                <div className='rounded-full'><img className='object-cover h-[7vh] w-[7vh] rounded-full' src={Pp} alt="Profile"/></div>
                <div className={`${IsMenuVisible ? "visible" : "invisible"} absolute top-[7vh] right-3/4 shadow-lg bg-[#fff] py-[2vh] px-[1vw] rounded-lg w-[15vw]`}>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] hover:rounded-md px-[1vw] py-[1vh]'><Link to='/profile-page'>Profile</Link></p>
                    <p className='hover:bg-[red] hover:text-[#fff] hover:rounded-md px-[1vw] py-[1vh]'><button onClick={handleLogout}><Link to='/auth'>Sign Out</Link></button></p>
                </div>
            </div>) : 
            <div className='flex flex-row justify-evenly'>
                <button className='header-button bg-[#fff] text-[#1D4ED8]'><Link to='/auth'>Sign In</Link></button>
                <button className='header-button bg-[#1D4ED8] text-[#fff]'><Link to='/auth/register'>Sign Up</Link></button>
            </div>}
        </div>
        <div onClick={showMenu} className='md:hidden relative cursor-pointer'>
            <img src={Menu} alt="Menu" />
            <div className={`${IsMenuVisible ? "visible" : "invisible"} absolute top-[5vh] right-0 shadow-lg bg-[#fff] py-[2vh] px-[5vw] rounded-lg w-[40vw]`}>
                <nav className='cursor-pointer'>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/'>Home</Link></p>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='now-playing'>Movie</Link></p>
                    <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/now-playing/detail'>Buy Ticket</Link></p>
                    {user ? (
                        <>
                            <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/profile-page'>Profile</Link></p>
                            <p onClick={handleLogout} className='hover:bg-[red] hover:text-[#fff] my-[1vh]'><Link to='/auth'>Sign Out</Link></p>
                        </> ) : <>
                            <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/auth'>Sign In</Link></p>
                            <p className='hover:bg-[#1D4ED8] hover:text-[#fff] my-[1vh]'><Link to='/auth/register'>Sign Up</Link></p>
                        </>
                    }
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
