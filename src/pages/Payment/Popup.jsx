import React from 'react'

function Popup() {
  return (
    <div className='bg-[#00000099] absolute inset-0 z-[1]'>
        <section className='popup'>
            <p className='text-center font-bold text-2xl'>Payment Info</p>
            <div className='flex flex-row items-center justify-between my-[7vh]'>
                <p className='text-[#8692A6] text-sm'>No. Rekening Virtual :</p>
                <div className='flex flex-row items-center text-right font-semibold text-lg'>
                    <p>12321328913829724</p>
                    <button className='custom-button text-[#1D4ED8] text-sm font-normal px-[1vw] py-[2vh] ml-[1vw]'>Copy</button>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between my-[7vh]'>
                <p className='text-[#8692A6] text-sm'>Total Payment :</p>
                <p className='font-bold text-lg text-[#1D4ED8] text-right'>$30</p>
            </div>
            <p className='text-[#A0A3BD]'>Pay this payment bill before it is due, <span className='text-[D00707]'>on June 23, 2023.</span> If the bill has not been paid by the specified time, it will be forfeited</p>
            <div className='flex flex-col items-center justify-between my-[7vh] gap-[1vh]'>
                <button className='custom-button bg-[#1D4ED8] text-[#fff] w-full py-[2vh] font-semibold text-sm'>Check Payment</button>
                <button className='custom-button text-[#1D4ED8] bg-[#fff] w-full py-[2vh] font-semibold text-sm'>Pay Later</button>
            </div>
        </section>
    </div>
  )
}

export default Popup
