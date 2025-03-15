import React from 'react'

import Checked from '../assets/ic_round-done.png'

function Steps() {
  return (
    <section className='flex justify-between px-[17vw] mb-[5vh]'>
        <div>
            <div className='steps bg-[#008000]'><img src={Checked} alt="Done" /></div>
            <p className='flex justify-center font-semibold text-sm text-[#4E4B66] mx-[2vw]'>Dates and Time</p>
        </div>
        <div class="second-step">
            <div className='steps bg-[#1D4ED8]'>2</div>
            <p className='flex justify-center font-semibold text-sm text-[#4E4B66] mx-[2vw]'>Seat</p>
        </div>
        <div class="third-step">
            <div className='steps bg-[#A0A3BD]'>3</div>
            <p className='flex justify-center font-semibold text-sm text-[#A0A3BD] mx-[2vw]'>Payment</p>
        </div>
    </section>
  )
}

export default Steps
