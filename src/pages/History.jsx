import React from 'react'
import Dropdown from '../assets/dropdown.png'
import QR from '../assets/qr.png'

function History() {
  return (
    <>
      <section className='history'>
          <div className='history-child'>
              <p className='col-span-1 row-span-1 text-[#AAAAAA]'>Tuesday, 07 July 2020 - 04:30pm</p>
              <img className='col-span-1 row-span-2 justify-self-end my-[2vh]' src="../../public/cineone.svg" alt="cineone21"/>
              <p className='col-span-1 row-span 1 text-2xl font-semibold mb-[7vh]'>Spider-Man: Homecoming</p>
          </div>
          <div className='mt-[3vh]'>
              <button className='custom-button bg-[#00ba8833] text-[#00BA88] border-[#00ba8833] w-[15vw] text-sm py-[2vh]'>Ticket in active</button>
              <button className='custom-button bg-[#e82c2c33] text-[#E82C2C] border-[#e82c2c33] w-[15vw] text-sm py-[2vh] mx-[1vw]'>Not paid</button>
          </div>
          <div className='flex flex-row justify-self-end items-center my-[3vh]'>
              <p className='text-lg text-[#AAAAAA] mr-[1vw]'> Show Details</p>
              <img className='cursor-pointer' src={Dropdown} alt="" id="dropdown"/>
          </div>
          <div className='my-[7vh] col-span-2'>
              <p className='text-lg font-semibold'>Ticket Information</p>
              <div className='flex flex-row justify-between items-center my-[5vh]'>
                  <p className='text-[#8692A6] text-sm'>No. Rekening Virtual</p>
                  <div className='flex flex-row justify-between'>
                      <p className='font-semibold text-lg'>12321328913829724</p>
                      <button className='custom-button text-[#1D4ED8] py-[1vh] px-[1vw] ml-[1vw] text-sm'>Copy</button>
                  </div>
              </div>
              <div className='flex flex-row justify-between my-[5vh]'>
                  <p className='text-[#8692A6] text-sm'>Total Payment</p>
                  <p className='text-[#1D4ED8] text-lg font-semibold'>$30</p>
              </div>
              <p className='text-[#8692A6] text-sm'>Pay this payment bill before it is due, on <span className='text-[#E82C2C]'>June 23, 2023.</span> If the bill has not been paid by the specified time, it will be forfeited</p>
              <button className='custom-button bg-[#1D4ED8] text-[#fff] text-sm py-[2vh] mt-[5vh] w-1/4'>Cek pembayaran</button>
            </div>
        </section>
        <section className="history">
            <div className='history-child'>
                <p className='col-span-1 row-span-1 text-[#AAAAAA]'>Monday, 14 June 2020 - 02:00pm</p>
                <img className='col-span-1 row-span-2 justify-self-end my-[2vh]' src="../../public/ebv.svg" alt="ebv"/>
                <p className='col-span-1 row-span 1 text-2xl font-semibold mb-[7vh]'>Avengers: End Game</p>
            </div>
            <div className='mt-[3vh]'>
                <button className='custom-button bg-[#6e719133] text-[#6E7191] border-[#6e719133] w-[15vw] text-sm py-[2vh]'>Ticket used</button>
                <button className='custom-button bg-[#1d4ed833] text-[#1D4ED8] border-[#1d4ed833] w-[15vw] text-sm py-[2vh] mx-[1vw]'>Paid</button>
            </div>
            <div className='flex flex-row justify-self-end items-center my-[3vh]'>
                <p className='text-lg text-[#AAAAAA] mr-[1vw]'>Show Details</p>
                <img className='cursor-pointer' src={Dropdown} alt=""/>
            </div>
            <div className='col-span-2 my-[7vh]'>
                <p className='text-lg font-semibold'>Ticket Information</p>
                <div className='receipt'>
                    <img className='row-span-2 w-full h-full object-cover px-[1vw]' src={QR} alt="QR Pembayaran"/>
                    <div className='mx-[1vw] pt-[3vh]'>
                        <div className='text-sm text-[#AAA] font-semibold'>Category</div>
                        <div className='font-semibold mt-[2vh]'>PG-13</div>
                    </div>
                    <div className='pt-[3vh]'>
                        <div className='text-sm text-[#AAA] font-semibold'>Time</div>
                        <div className='font-semibold mt-[2vh]'>2.00 PM</div>
                    </div>
                    <div className='pt-[3vh]'>
                        <div className='text-sm text-[#AAA] font-semibold'>Seats</div>
                        <div className='font-semibold mt-[2vh]'>C4, C5, C6</div>
                    </div>
                    <div className='row-span-2'>
                        <div>Total</div>
                        <div className='text-2xl font-semibold mt-[2vh]'>$30.00</div>
                    </div>
                    <div className='mx-[1vw]' >
                        <div className='text-sm text-[#AAA] font-semibold'>Movie</div>
                        <div className='font-semibold mt-[2vh]'>Spider-Man:</div>
                    </div>
                    <div className=''>
                      <div className='text-sm text-[#AAA] font-semibold'>Date</div>
                        <div className='font-semibold mt-[2vh]'>07 Jul</div>
                    </div>
                    <div>
                        <div className='text-sm text-[#AAA] font-semibold'>Count</div>
                        <div className='font-semibold mt-[2vh]'>3pcs</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="history">
            <div className='history-child'>
                <p className='col-span-1 row-span-1 text-[#AAAAAA]'>Monday, 14 June 2020 - 02:00pm</p>
                <img className='col-span-1 row-span-2 justify-self-end my-[2vh]' src="../../public/ebv.svg" alt="ebv"/>
                <p className='col-span-1 row-span 1 text-2xl font-semibold mb-[7vh]'>Avengers: End Game</p>
            </div>
            <div className='mt-[3vh]'>
                <button className='custom-button bg-[#6e719133] text-[#6E7191] border-[#6e719133] w-[15vw] text-sm py-[2vh]'>Ticket used</button>
                <button className='custom-button bg-[#1d4ed833] text-[#1D4ED8] border-[#1d4ed833] w-[15vw] text-sm py-[2vh] mx-[1vw]'>Paid</button>
            </div>
            <div className='flex flex-row justify-self-end items-center my-[3vh]'>
                <p className='text-lg text-[#AAAAAA] mr-[1vw]'>Show Details</p>
                <img className='cursor-pointer' src={Dropdown} alt=""/>
            </div>
            <div className='col-span-2 my-[7vh]'>
                <p className='text-lg font-semibold'>Ticket Information</p>
                <div className='receipt'>
                    <img className='row-span-2 w-full h-full object-cover px-[1vw]' src={QR} alt="QR Pembayaran"/>
                    <div className='mx-[1vw] pt-[3vh]'>
                        <div className='text-sm text-[#AAA] font-semibold'>Category</div>
                        <div className='font-semibold mt-[2vh]'>PG-13</div>
                    </div>
                    <div className='pt-[3vh]'>
                        <div className='text-sm text-[#AAA] font-semibold'>Time</div>
                        <div className='font-semibold mt-[2vh]'>2.00 PM</div>
                    </div>
                    <div className='pt-[3vh]'>
                        <div className='text-sm text-[#AAA] font-semibold'>Seats</div>
                        <div className='font-semibold mt-[2vh]'>C4, C5, C6</div>
                    </div>
                    <div className='row-span-2'>
                        <div>Total</div>
                        <div className='text-2xl font-semibold mt-[2vh]'>$30.00</div>
                    </div>
                    <div className='mx-[1vw]' >
                        <div className='text-sm text-[#AAA] font-semibold'>Movie</div>
                        <div className='font-semibold mt-[2vh]'>Spider-Man:</div>
                    </div>
                    <div className=''>
                      <div className='text-sm text-[#AAA] font-semibold'>Date</div>
                        <div className='font-semibold mt-[2vh]'>07 Jul</div>
                    </div>
                    <div>
                        <div className='text-sm text-[#AAA] font-semibold'>Count</div>
                        <div className='font-semibold mt-[2vh]'>3pcs</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default History
