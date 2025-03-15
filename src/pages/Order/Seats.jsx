import React from 'react'

function Seats() {
  return (
    <section className='w-3/4 rounded-md bg-[#fff] py-[5vh] px-[2vw]'>
        <div className='ticket'>
            <div className='col-span-1 row-span-3 flex justify-center items-center h-full overflow-hidden pr-[2vw] pb-[2vh]'>
                <img className='object-cover object-top w-full h-full' src="../../public/poster1.png" alt="Spiderman" />
            </div>
            <p className='col-span-2 row-span-1 font-semibold text-2xl text-[#000]'>Spider-Man: Homecoming</p>
            <div className='col-span-2 row-span-1 flex flex-row items-center'>
                <div className='movie-genre'>Action</div>
                <div className='movie-genre'>Adventure</div>
            </div>
            <p className='col-span-1 row-span-1 my-[2vh]'>Regular - 13.00</p>
            <button className='custom-button col-span-1 row-span-1 bg-[#1D4ED8] text-[#fff] font-normal'>Change</button>
        </div>
        <div>
            <p className='font-medium text-2xl text-[#14142B] my-[5vh]'>Choose Your Seat</p>
            <div className='px-[1vw]'>
                <p className='font-semibold text-[#4E4B66] text-center pr-[7vw]'>Screen</p>
                <div className='grid grid-cols-17 grid-rows-8 mt-[5vh] pr-[10vw]'>
                    <div className='seats bg-transparent'>A</div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-[#6E7191]'></div><div className='seats'></div><div className='seats bg-transparent'></div><div className='seats bg-transparent'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-[#6E7191]'></div><div className='seats'></div><div className='seats'></div>
                    <div className='seats bg-transparent'>B</div><div className='seats'></div><div className='seats bg-[#6E7191]'></div><div className='seats bg-[#6E7191]'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-transparent'></div><div className='seats bg-transparent'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div>
                    <div className='seats bg-transparent'>C</div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-transparent'></div><div className='seats bg-transparent'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div>
                    <div className='seats bg-transparent'>D</div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-[#6E7191]'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-[#6E7191]'></div><div className='seats bg-transparent'></div><div className='seats bg-transparent'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div>
                    <div className='seats bg-transparent'>E</div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-transparent'></div><div className='seats bg-transparent'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div>
                    <div className='seats bg-transparent'>F</div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-transparent'></div><div className='seats bg-transparent'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div>
                    <div className='seats bg-transparent'>G</div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-transparent'></div><div className='seats bg-transparent'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats'></div><div className='seats bg-[#F589D7]'></div><div className='seats bg-[#F589D7]'></div>
                    <div className='seats bg-transparent'></div><div className='seats bg-transparent'>1</div><div className='seats bg-transparent'>2</div><div className='seats bg-transparent'>3</div><div className='seats bg-transparent'>4</div><div className='seats bg-transparent'>5</div><div className='seats bg-transparent'>6</div><div className='seats bg-transparent'>7</div><div className='seats bg-transparent'></div><div className='seats bg-transparent'></div><div className='seats bg-transparent'>8</div><div className='seats bg-transparent'>9</div><div className='seats bg-transparent'>10</div><div className='seats bg-transparent'>11</div><div className='seats bg-transparent'>12</div><div className='seats bg-transparent'>13</div><div className='seats bg-transparent'>14</div>
                </div>
            </div>
        </div>
        <div className='font-normal text-lg my-[5vh] mx-[2vw]'>
            <p>Seating key</p>
            <div className='flex flex-row justify-around text-[#4E4B66]'>
                <div className='flex flex-row items-center mt-[2vh] mr-[1vw]'>
                    <div className='mr-[1vw] rounded-sm w-[20px] h-[20px] bg-[#D6D8E7]'></div>
                    <div>Available</div>
                </div>
                <div className='flex flex-row mt-[2vh] mr-[1vw]'>
                    <div className='mt-[1vh] mr-[1vw] rounded-sm w-[20px] h-[20px] bg-[#1D4ED8]'></div>
                    <div>Selected</div>
                </div>
                <div className='flex flex-row mt-[2vh] mr-[1vw]'>
                    <div className='mt-[1vh] mr-[1vw] rounded-sm w-[20px] h-[20px] bg-[#F589D7]'></div>
                    <div>Love nest</div>
                </div>
                <div className='flex flex-row mt-[2vh] mr-[1vw]'>
                    <div className='mt-[1vh] mr-[1vw] rounded-sm w-[20px] h-[20px] bg-[#4E4B66]'></div>
                    <div>Sold</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Seats
