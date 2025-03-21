import React from 'react'

function Steps() {
  return (
    <section className='hidden md:flex justify-between px-[5vw] mb-[5vh]'>
        <div>
            <div className='steps bg-[#1D4ED8]'>1</div>
            <p className='flex justify-center font-semibold text-sm text-[#4E4B66] mx-[2vw]'>Fill Form</p>
        </div>
        <div className='flex items-center justify-center'>
            <div className='flex-'>----------</div>
            <div>
              <div className='steps bg-[#A0A3BD]'>2</div>
              <p className='flex justify-center font-semibold text-sm text-[#A0A3BD] mx-[2vw]'>Activate</p>
            </div>
            <div className='flex-1'>----------</div>
        </div>
        <div>
            <div className='steps bg-[#A0A3BD]'>3</div>
            <p className='flex justify-center font-semibold text-sm text-[#A0A3BD] mx-[2vw]'>Done</p>
        </div>
    </section>
  )
}

export default Steps
