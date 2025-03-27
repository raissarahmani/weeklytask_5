import React from 'react'

import FacebookLogo from '../assets/Facebook2.svg'
import InstagramLogo from '../assets/instagram.svg'
import XLogo from '../assets/x.svg'
import YoutubeLogo from '../assets/youtube.svg'

function Footer() {
  return (
    <footer className='py-[15vh] px-[10vw] bg-[#fff]'>
        <div className='footer-sect'>
            <div className='mb-[10vh]'>
                <img src="/Tickitz2.png" alt="Logo Tickitz" />
                <p className='mt-[2vh] md:mb-[10vh] text-[#6E7191] font-normal text-sm'>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
            </div>
            <div className='md:px-[1vw] md:block grid grid-cols-3 grid-rows-3 h-[20vh]'>
                <div className='text-[#000] font-semibold col-span-3 row-span-1'>Explore</div>
                <p className='font-normal text-sm text-[#4E4B66] md:my-[3vh] cols-span-1 rows-span-1'>Cinema</p>
                <p className='font-normal text-sm text-[#4E4B66] md:my-[3vh] col-span-1 row-span-1'>Movies List</p>
                <p className='font-normal text-sm text-[#4E4B66] md:my-[3vh] col-span-1 row-span-1'>My Ticket</p>
                <p className='font-normal text-sm text-[#4E4B66] md:my-[3vh] col-span-1 row-span-1'>Notification</p>
            </div>
            <div className='md:px-[1vw] md:block grid grid-cols-3 grid-rows-2 h-[20vh]'>
                <div className='text-[#000] font-semibold md:mb-[4vh] col-span-3 row-span-1'>Our Sponsor</div>
                <img className='w-2/3 md:w-1/2 h-1/2 md:h-1/3' src="/ebv.svg" alt="ebv" />
                <img className='md:my-[4vh] w-2/3 h-1/2 md:h-1/5' src="/cineone21.svg" alt="cineone21" />
                <img className='w-2/3 md:w-1/3 h-1/2 md:h-1/5 md:pl-[0.5vw]' src="/hiflix.png" alt="hiflix" />
            </div>
            <div>
                <div className='text-[#000] font-semibold mb-[4vh]'>Follow Us</div>
                <div className='md:block flex flex-row gap-2'>
                    <div className='block md:flex flex-row'>
                        <img className='w-full md:w-[2vw] h-[4vh] md:mb-[2vh]' src={FacebookLogo} alt="Facebook" />
                        <p className='hidden md:block ml-[1vw] align-left font-semibold text-[#6E7191]'>Tickitz Cinema id</p>
                    </div>
                    <div className='block md:flex flex-row'>
                        <img className='w-full md:w-[2vw] h-[4vh] md:mb-[2vh]' src={InstagramLogo} alt="instagram" />
                        <p className='hidden md:block ml-[1vw] align-left font-semibold text-[#6E7191]'>tickitz.id</p>
                    </div>
                    <div className='block md:flex flex-row'>
                        <img className='w-2/3 md:w-[2vw] h-[4vh] md:mb-[2vh]' src={XLogo} alt="Twitter" />
                        <p className='hidden md:block ml-[1vw] align-left font-semibold text-[#6E7191]'>tickitz.id</p>
                    </div>
                    <div className='block md:flex flex-row'>
                        <img className='w-2/3 md:w-[2vw] h-[4vh] md:mb-[2vh]' src={YoutubeLogo} alt="Youtube" />
                        <p className='hidden md:block ml-[1vw] align-left font-semibold text-[#6E7191]'>Tickitz Cinema id</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='text-[#4E4B66] text-left md:text-center font-normal mt-[10vh]'>© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer
