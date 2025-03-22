import { useNavigate } from 'react-router'

import Calendar from '../../assets/calendar.png'
import Clock from '../../assets/time.png'
import Location from '../../assets/location.png'

function Book() {
    const navigate = useNavigate()
    const nextPage = (e) => {
    e.preventDefault()
    navigate("/now-playing/order")
}

  return (
    <section className='pt-[5vh] pb-[10vh] px-[5vw] md:px-[10vw]'>
        <p className='font-semibold md:font-normal text-xl md:text-3xl text-center md:text-left text-[#121212]'>Book Tickets</p>
        <form className='md:font-semibold text-sm md:text-basis text-[#000] flex flex-col md:flex-row flex-1 md:my-[5vh]'>
            <div className='flex flex-col mr-[1vw] w-full md:w-1/4'>
                <label for="date">Choose Date</label>
                <div className='flex flex-row items-center border-input bg-[#EFF0F6] px-[5vw] md:px-[1vw]'>
                    <img className='w-[3vw] md:w-[1vw] h-[2.5vh] md:h-[2vh]' src={Calendar} alt="Date" />
                    <input className='border-none w-full min-w-[100px] py-[2vh] px-[1vw] ml-[0.5vw] cursor-pointer md:font-semibold outline-none' type="date" />
                </div>
                <p className='validation-msg'>Choose date</p>
            </div>
            <div className='flex flex-col mr-[1vw] w-full md:w-1/4'>
                <label for="time">Choose Time</label>
                <div className='flex flex-row items-center border-input bg-[#EFF0F6] px-[5vw] md:px-[1vw]'>
                    <img className='w-[3vw] md:w-[1vw] h-[2.5vh] md:h-[2vh]' src={Clock} alt="Time" />
                    <input className='border-none w-full min-w-[100px] py-[2vh] px-[1vw] ml-[0.5vw] cursor-pointer md:font-semibold outline-none' type="time" />
                </div>
                <p className='validation-msg'>Choose time</p>
            </div>
            <div className='flex flex-col mr-[1vw] w-full md:w-1/4'>
                <label for="loc">Choose Location</label>
                <div className='flex flex-row items-center border-input bg-[#EFF0F6] px-[5vw] md:px-[1vw]'>
                    <img className='w-[3vw] md:w-[1vw] h-[2.5vh] md:h-[2vh]' src={Location} alt="Location" />
                    <select name="loc" className='border-none w-full min-w-[100px] py-[2vh] px-[1vw] ml-[0.5vw] cursor-pointer md:font-semibold outline-none'>
                        <option value="" hidden>--Choose City--</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Semarang">Semarang</option>
                        <option value="Surabaya">Surabaya</option>
                        <option value="Medan">Medan</option>
                        <option value="Palembang">Palembang</option>
                        <option value="Samarinda">Samarinda</option>
                        <option value="Banjarmasin">Banjarmasin</option>
                        <option value="Manado">Manado</option>
                        <option value="Makassar">Makassar</option>
                        <option value="Denpasar">Denpasar</option>
                    </select>
                </div>
                <p className='validation-msg'>Choose location</p>
            </div>
            <div>
                <div className='flex flex-col items-center justify-center bg-transparent border-none'>
                    <button className='custom-button bg-[#1D4ED8] mt-[3.5vh] py-[2vh] px-[2vw] rounded-sm text-[#fff] w-full'>Filter</button>
                </div>
            </div>
        </form>
        <div>
            <div className='block md:flex flex-row items-center my-[5vh] md:my-0'>
                <p className='text-xl md:text-xl md:font-semibold text-center md:text-left text-[#000] mr-[3vw]'>Choose Cinema</p>
                <p className='hidden md:block font-subtitle text-[#8692A6]'>39 Result</p>
            </div>
            <form className='flex flex-col md:flex-row gap-[1vh] justify-between items-center mt-[1vh] mb-[5vh] w-full'>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="cinema" id="ebv" value="ebv" />
                    <label className='label-radio' for="ebv">
                        <img className='w-[12vw] h-[5vh] object-contain' src="../../public/ebv.svg" alt="ebv" />
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="cinema" id="hiflix" value="hiflix" />
                    <label className='label-radio' for="hiflix">
                        <img className='w-[12vw] h-[5vh] object-contain' src="../../public/hiflix.png" alt="hiflix" />
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="cinema" id="cineone" value="cineone21" />
                    <label className='label-radio' for="cineone">
                        <img className='w-[12vw] h-[5vh] object-contain' src="../../public/cineone.svg" alt="cineone21" />
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="cinema" id="ebv2" value="ebv" />
                    <label className='label-radio' for="ebv2">
                        <img className='w-[12vw] h-[5vh] object-contain' src="../../public/ebv.svg" alt="ebv" />
                    </label>
                </div>
            </form>
            <p className='validation-msg'>Choose cinema</p>
            <div className="hidden md:flex flex-row items-center justify-center">
                <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>1</div>
                <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>2</div>
                <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>3</div>
                <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>4</div>
            </div>
            <div className='flex justify-center'><button onClick={nextPage} className='custom-button bg-[#1D4ED8] mt-[3.5vh] py-[2vh] px-[2vw] rounded-sm text-[#fff] w-full md:w-1/4'>Book Now</button></div>
        </div>
    </section>
  )
}

export default Book
