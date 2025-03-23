import { useState } from 'react'
import Dropdown from '../assets/dropdown.png'
import QR from '../assets/qr.png'

function History() {
const [showDetail, setShowDetail] = useState(false)


  return (
    <div className='mx-[10vw] md:mx-0'>
      <section className='history'>
          <div className='history-child'>
            <div>
                <p className='text-sm md:text-basis text-[#AAAAAA]'>Tuesday, 07 July 2020 - 04:30pm</p>
                <p className='text-xl md:text-2xl font-semibold mb-[7vh]'>Spider-Man: Homecoming</p>
            </div>
            <img className='my-[2vh] w-1/2 md:w-1/4 h-1/2 -order-1 md:order-0' src="../../public/cineone21.svg" alt="cineone21"/>
          </div>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex flex-col md:flex-row gap-2'>
                <button className='custom-button bg-[#00ba8833] text-[#00BA88] border-[#00ba8833] w-full md:w-[15vw] text-sm py-[2vh]'>Ticket in active</button>
                <button className='custom-button bg-[#e82c2c33] text-[#E82C2C] border-[#e82c2c33] w-full md:w-[15vw] text-sm py-[2vh]'>Not paid</button>
            </div>
            <div className='flex flex-row items-center justify-center my-[3vh]'>
                <p className='md:text-lg text-[#AAAAAA] mr-[1vw]'> Show Details</p>
                <img className='cursor-pointer' src={Dropdown} alt="" id="dropdown"/>
            </div>
          </div>
          <div className='my-[7vh]'>
              <p className='text-lg font-semibold'>Ticket Information</p>
              <div className='flex flex-col md:flex-row justify-between md:items-center my-[5vh]'>
                  <p className='text-[#8692A6] text-sm'>No. Rekening Virtual</p>
                  <div className='flex flex-row justify-between'>
                      <p className='font-semibold text-lg'>12321328913829724</p>
                      <button className='custom-button text-[#1D4ED8] py-[1vh] px-[1vw] ml-[1vw] text-sm'>Copy</button>
                  </div>
              </div>
              <div className='flex flex-col md:flex-row justify-between my-[5vh]'>
                  <p className='text-[#8692A6] text-sm'>Total Payment</p>
                  <p className='text-[#1D4ED8] text-lg font-semibold'>$30</p>
              </div>
              <p className='text-[#8692A6] text-sm'>Pay this payment bill before it is due, on <span className='text-[#E82C2C]'>June 23, 2023.</span> If the bill has not been paid by the specified time, it will be forfeited</p>
              <button className='custom-button bg-[#1D4ED8] text-[#fff] text-sm py-[2vh] mt-[5vh] w-full md:w-1/4'>Cek pembayaran</button>
            </div>
        </section>
        <section className="history">
            <div className='history-child'>
                <div>
                    <p className='text-sm md:text-basis text-[#AAAAAA]'>Monday, 14 June 2020 - 02:00pm</p>
                    <p className='text-xl md:text-2xl font-semibold mb-[7vh]'>Avengers: End Game</p>
                </div>
                <img className='my-[2vh] w-1/4 h-1/2 -order-1 md:order-0' src="../../public/ebv.svg" alt="ebv"/>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
                    <button className='custom-button bg-[#6e719133] text-[#6E7191] border-[#6e719133] w-full md:w-[15vw] text-sm py-[2vh]'>Ticket used</button>
                    <button className='custom-button bg-[#1d4ed833] text-[#1D4ED8] border-[#1d4ed833] w-full md:w-[15vw] text-sm py-[2vh]'>Paid</button>
                </div>
                <div className='flex flex-row justify-center items-center my-[3vh]'>
                    <p className='md:text-lg text-[#AAAAAA] mr-[1vw]'>Show Details</p>
                    <img className='cursor-pointer' src={Dropdown} alt=""/>
                </div>
            </div>
            <div className='my-[7vh]'>
                <p className='text-lg font-semibold'>Ticket Information</p>
                <div className='flex flex-col md:flex-row md:items-center justify-between w-3/4'>
                    <img className='w-1/2 md:w-1/3 h-1/3 object-cover px-[1vw]' src={QR} alt="QR Pembayaran"/>
                    <div className='w-full'>
                        <div className='flex flex-row justify-between'>
                            <div className='mx-[1vw] pt-[3vh]'>
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Category</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>PG-13</div>
                            </div>
                            <div className='pt-[3vh]'>
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Time</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>2.00 PM</div>
                            </div>
                            <div className='pt-[3vh]'>
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Seats</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>C4, C5, C6</div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between my-[3vh] md:mt-0'>
                            <div className='mx-[1vw]' >
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Movie</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>Spider-Man:</div>
                            </div>
                            <div className=''>
                              <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Date</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>07 Jul</div>
                            </div>
                            <div>
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Count</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>3pcs</div>
                            </div>
                        </div>
                    </div>
                    <div className='md:ml-[3vw] w-1/4'>
                        <div>Total</div>
                        <div className='text-2xl font-semibold mt-[2vh]'>$30.00</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="history">
            <div className='history-child'>
                <div>
                    <p className='text-sm md:text-basis text-[#AAAAAA]'>Monday, 14 June 2020 - 02:00pm</p>
                    <p className='text-xl md:text-2xl font-semibold mb-[7vh]'>Avengers: End Game</p>
                </div>
                <img className='my-[2vh] w-1/4 h-1/2 -order-1 md:order-0' src="../../public/ebv.svg" alt="ebv"/>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
                    <button className='custom-button bg-[#6e719133] text-[#6E7191] border-[#6e719133] w-full md:w-[15vw] text-sm py-[2vh]'>Ticket used</button>
                    <button className='custom-button bg-[#1d4ed833] text-[#1D4ED8] border-[#1d4ed833] w-full md:w-[15vw] text-sm py-[2vh]'>Paid</button>
                </div>
                <div className='flex flex-row justify-center items-center my-[3vh]'>
                    <p className='md:text-lg text-[#AAAAAA] mr-[1vw]'>Show Details</p>
                    <img className='cursor-pointer' src={Dropdown} alt=""/>
                </div>
            </div>
            <div className='my-[7vh]'>
                <p className='text-lg font-semibold'>Ticket Information</p>
                <div className='flex flex-col md:flex-row md:items-center justify-between w-3/4'>
                    <img className='w-1/2 md:w-1/3 h-1/3 object-cover px-[1vw]' src={QR} alt="QR Pembayaran"/>
                    <div className='w-full'>
                        <div className='flex flex-row justify-between'>
                            <div className='mx-[1vw] pt-[3vh]'>
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Category</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>PG-13</div>
                            </div>
                            <div className='pt-[3vh]'>
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Time</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>2.00 PM</div>
                            </div>
                            <div className='pt-[3vh]'>
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Seats</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>C4, C5, C6</div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between my-[3vh] md:mt-0'>
                            <div className='mx-[1vw]' >
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Movie</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>Spider-Man:</div>
                            </div>
                            <div className=''>
                              <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Date</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>07 Jul</div>
                            </div>
                            <div>
                                <div className='text-xs md:text-sm text-[#AAA] font-semibold'>Count</div>
                                <div className='text-sm md:text-basis font-semibold mt-[2vh]'>3pcs</div>
                            </div>
                        </div>
                    </div>
                    <div className='md:ml-[3vw] w-1/4'>
                        <div>Total</div>
                        <div className='text-2xl font-semibold mt-[2vh]'>$30.00</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default History
