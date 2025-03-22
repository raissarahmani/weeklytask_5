import { useNavigate } from 'react-router'

import Down from '../../assets/Arrow-black.png'
import Right from '../../assets/right-black.png'

function Seats() {
    const navigate = useNavigate()
    const nextPage = (e) => {
    e.preventDefault()
    navigate("/now-playing/payment")
}

  return (
    <>
    <section className='w-full md:w-3/4 rounded-md bg-[#fff] py-[5vh] px-[2vw]'>
        <div className='ticket'>
            <div className='col-span-1 row-span-3 flex justify-center items-center h-full md:overflow-hidden md:pr-[2vw] pb-[2vh]'>
                <img className='object-cover object-top w-full h-full' src="../../public/poster1.png" alt="Spiderman" />
            </div>
            <p className='md:col-span-2 row-span-1 font-semibold text-2xl text-center md:text-left text-[#000]'>Spider-Man: Homecoming</p>
            <div className='md:col-span-2 row-span-1 flex flex-row items-center justify-center md:justify-start'>
                <div className='movie-genre'>Action</div>
                <div className='movie-genre'>Adventure</div>
            </div>
            <p className='col-span-1 row-span-1 my-[2vh] text-center md:text-left'>Regular - 13.00</p>
            <button className='custom-button col-span-1 row-span-1 py-[1vh] bg-[#1D4ED8] text-[#fff] text-sm font-normal'>Change</button>
        </div>
        <div>
            <p className='font-medium text-lg md:text-2xl text-[#14142B] my-[5vh] mx-[2vw]'>Choose Your Seat</p>
            <div className='px-[1vw]'>
                <p className='hidden md:blockfont-semibold text-[#4E4B66] text-center w-4/5'>Screen</p>
                <div className='flex flex-row justify-between'>
                    <div className='grid grid-cols-8 grid-rows-1 mt-[5vh] border-l border-b border-[red] md:border-none'>
                        <div className='invisible md:visible'>
                            <div className='seats bg-transparent'>A</div>
                            <div className='seats bg-transparent'>B</div>
                            <div className='seats bg-transparent'>C</div>
                            <div className='seats bg-transparent'>D</div>
                            <div className='seats bg-transparent'>E</div>
                            <div className='seats bg-transparent'>F</div>
                            <div className='seats bg-transparent'>G</div>
                            <div className='hidden md:block seats bg-transparent'></div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>1</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>2</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>3</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>4</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>5</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>6</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>7</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-7 md:grid-cols-10 grid-rows-1 mt-[5vh] md:pr-[10vw] border-b border-[red] md:border-none'>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>8</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>9</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>10</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>11</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>12</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>13</div>
                        </div>
                        <div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='seats'></div>
                            <div className='hidden md:block seats bg-transparent'>14</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:text-lg mt-[5vh] mx-[2vw]'>
                <p className='font-medium md:font-normal'>Seating key</p>
                <div className='flex flex-row justify-evenly md:justify-center '>
                    <div className='flex flex-col md:flex-row mt-[5vh]'>
                        <div className='md:hidden flex flex-row items-center'>
                            <div className='mr-[2vw] md:mr-[1vw]'><img src={Down} alt="" /></div>
                            <div>A - G</div>
                        </div>
                        <div className='flex flex-row items-center mt-[2vh] mr-[1vw]'>
                            <div className='mr-[2vw] md:mr-[1vw] rounded-sm w-[20px] h-[20px] bg-[#D6D8E7]'></div>
                            <div>Available</div>
                        </div>
                        <div className='flex flex-row mt-[2vh] mr-[1vw]'>
                            <div className='mt-[1vh] mr-[2vw] md:mr-[1vw] rounded-sm w-[20px] h-[20px] bg-[#F589D7]'></div>
                            <div>Love nest</div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row mt-[5vh]'>
                        <div className='md:hidden flex flex-row items-center'>
                            <div className='mr-[2vw] md:mr-[1vw]'><img src={Right} alt="" /></div>
                            <div>1 - 14</div>
                        </div>
                        <div className='flex flex-row mt-[2vh] mr-[1vw]'>
                            <div className='mt-[1vh] mr-[2vw] md:mr-[1vw] rounded-sm w-[20px] h-[20px] bg-[#1D4ED8]'></div>
                            <div>Selected</div>
                        </div>
                        <div className='flex flex-row mt-[2vh] mr-[1vw]'>
                            <div className='mt-[1vh] mr-[2vw] md:mr-[1vw] rounded-sm w-[20px] h-[20px] bg-[#4E4B66]'></div>
                            <div>Sold</div>
                        </div>
                    </div>
                </div>
                <button className='md:hidden custom-button bg-[#1D4ED8] text-sm text-[#fff] text-center py-[1vh] mt-[5vh] w-full'>Submit</button>
            </div>
        </div>
    </section>
    <div className='hidden md:block w-1/4 ml-[1vw]'>
        <section className='rounded-md bg-[#fff]'>
            <div className='pt-[5vh] px-[5vw]'>
                <img src='../../../public/cineone.svg' alt="cineone21" />
            </div>
            <p className='py-[1vh] px-[2vw] text-center font-semibold'>CineOne 21 Cinema</p>
            <div className='py-[2vh] px-[2vw]'>
                <div className='flex flex-row justify-between mb-[3vh]'>
                    <div className='text-xs text-[#6B6B6B]'>Movie selected</div>
                    <div className='font-semibold text-xs text-right text-[#14142B]'>Spider-Man: Homecoming</div>
                </div>
                <div className='flex flex-row justify-between mb-[3vh]'>
                    <div className='text-xs text-[#6B6B6B]'>Tuesday, 07 July 2020</div>
                    <div className='font-semibold text-xs text-center text-[#14142B]'>13.00</div>
                </div>
                <div className='flex flex-row justify-between mb-[3vh]'>
                    <div className='text-xs text-[#6B6B6B]'>One ticket price</div>
                    <div className='font-semibold text-xs text-center text-[#14142B]'>$10</div>
                </div>
                <div className='flex flex-row justify-between mb-[3vh]'>
                    <div className='text-xs text-[#6B6B6B]'>Seat choosed</div>
                    <div className='font-semibold text-xs text-center text-[#14142B]'>C4, C5, C6</div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center py-[2vh] px-[2vw] border border-solid border-[#E6E6E6]'>
                <div>Total Payment</div>
                <div className='font-semibold text-[#1D4ED8] text-right'>$30</div>
            </div>
        </section>
        <button onClick={nextPage} className='custom-button mt-[6vh] py-[2vh] w-full text-[#fff] text-sm bg-[#1D4ED8]'>Checkout now</button>
    </div>
    </>
  )
}

export default Seats
