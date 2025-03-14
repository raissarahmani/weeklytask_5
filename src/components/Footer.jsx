import React from 'react'

import FacebookLogo from '../assets/Facebook2.svg'
import InstagramLogo from '../assets/instagram.svg'
import XLogo from '../assets/x.svg'
import YoutubeLogo from '../assets/youtube.svg'

function Footer() {
  return (
    <footer className='py-[10vh] px-[10vw] bg-[#fff]'>
        <div className='footer-sect'>
            <div>
                <img src="../../public/Tickitz2.png" alt="Logo Tickitz" />
                <p className='mt-[2vh] mb-[10vh] text-[#6E7191] font-normal text-sm'>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
            </div>
            <div className='px-[1vw]'>
                <div className='text-[#000] font-semibold'>Explore</div>
                <p className='font-normal text-sm text-[#4E4B66] my-[3vh]'>Cinema</p>
                <p className='font-normal text-sm text-[#4E4B66] my-[3vh]'>Movies List</p>
                <p className='font-normal text-sm text-[#4E4B66] my-[3vh]'>My Ticket</p>
                <p className='font-normal text-sm text-[#4E4B66] my-[3vh]'>Notification</p>
            </div>
            <div className='px-[1vw]'>
                <div className='text-[#000] font-semibold mb-[4vh]'>Our Sponsor</div>
                <img className='w-1/2 h-1/5' src="../../public/ebv.svg" alt="ebv" />
                <img className='my-[2vh] w-7/10 h-1/5' src="../../public/cineone.svg" alt="cineone21" />
                <img className='w-1/3 h-1/8' src="../../public/hiflix.png" alt="hiflix" />
            </div>
            <div>
                <div className='text-[#000] font-semibold mb-[4vh]'>Follow Us</div>
                <div className='flex flex-row'>
                    <img className='w-[2vw] h-[4vh] mb-[2vh]' src={FacebookLogo} alt="Facebook" />
                    <p className='ml-[1vw] align-left font-semibold text-[#6E7191]'>Tickitz Cinema id</p>
                </div>
                <div className='flex flex-row'>
                    <img className='w-[2vw] h-[4vh] mb-[2vh]' src={InstagramLogo} alt="instagram" />
                    <p className='ml-[1vw] align-left font-semibold text-[#6E7191]'>tickitz.id</p>
                </div>
                <div className='flex flex-row'>
                    <img className='w-[2vw] h-[4vh] mb-[2vh]' src={XLogo} alt="Twitter" />
                    <p className='ml-[1vw] align-left font-semibold text-[#6E7191]'>tickitz.id</p>
                </div>
                <div className='flex flex-row'>
                    <img className='w-[2vw] h-[4vh] mb-[1vh]' src={YoutubeLogo} alt="Youtube" />
                    <p className='ml-[1vw] align-left font-semibold text-[#6E7191]'>Tickitz Cinema id</p>
                </div>
            </div>
        </div>
        <div className='text-[#4E4B66] text-center font-normal mt-[10vh]'>© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer
