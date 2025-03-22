import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

import Calendar from '../../assets/calendar.png'
import Clock from '../../assets/time.png'
import Location from '../../assets/location.png'

function Book() {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        location: "",
        cinema: "",
    })
    const [error, setError] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const navigate = useNavigate()

    const formHandler = (e) => {
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    useEffect(() => {
        let newError = {}

        if(!formData.date) newError.date = "Data should be filled"
        if(!formData.time) newError.time = "Data should be filled"
        if(!formData.location) newError.location = "Data should be filled"
        if(!formData.cinema) newError.cinema = "Data should be filled"

        setError(newError)
        setIsFormValid(Object.keys(newError).length === 0)
    }, [formData])

    const submitForm = (e) => {
        e.preventDefault()
        setIsSubmitted(true)

        if (isFormValid) {
            navigate("/now-playing/order")
        }
    }

  return (
    <section className='pt-[5vh] pb-[10vh] px-[5vw] md:px-[10vw]'>
        <p className='font-semibold md:font-normal text-xl md:text-3xl text-center md:text-left text-[#121212]'>Book Tickets</p>
        <form onSubmit={submitForm} className='md:font-semibold text-sm md:text-basis text-[#000] flex flex-col md:flex-row flex-1 md:my-[5vh]'>
            <div className='flex flex-col mr-[1vw] w-full md:w-1/4'>
                <label for="date">Choose Date</label>
                <div className='flex flex-row items-center border-input bg-[#EFF0F6] px-[5vw] md:px-[1vw]'>
                    <img className='w-[3vw] md:w-[1vw] h-[2.5vh] md:h-[2vh]' src={Calendar} alt="Date" />
                    <input onChange={formHandler} className='border-none w-full min-w-[100px] py-[2vh] px-[1vw] ml-[0.5vw] cursor-pointer md:font-semibold outline-none' type="date" name="date" value={formData.date} />
                </div>
                {isSubmitted && error.date && <p className='validation-msg'>{error.date}</p>}
            </div>
            <div className='flex flex-col mr-[1vw] w-full md:w-1/4'>
                <label for="time">Choose Time</label>
                <div className='flex flex-row items-center border-input bg-[#EFF0F6] px-[5vw] md:px-[1vw]'>
                    <img className='w-[3vw] md:w-[1vw] h-[2.5vh] md:h-[2vh]' src={Clock} alt="Time" />
                    <input onChange={formHandler} className='border-none w-full min-w-[100px] py-[2vh] px-[1vw] ml-[0.5vw] cursor-pointer md:font-semibold outline-none' type="time" name="time" value={formData.time} />
                </div>
                {isSubmitted && error.time && <p className='validation-msg'>{error.time}</p>}
            </div>
            <div className='flex flex-col mr-[1vw] w-full md:w-1/4'>
                <label for="location">Choose Location</label>
                <div className='flex flex-row items-center border-input bg-[#EFF0F6] px-[5vw] md:px-[1vw]'>
                    <img className='w-[3vw] md:w-[1vw] h-[2.5vh] md:h-[2vh]' src={Location} alt="Location" />
                    <select onChange={formHandler} value={formData.location} name="location" className='border-none w-full min-w-[100px] py-[2vh] px-[1vw] ml-[0.5vw] cursor-pointer md:font-semibold outline-none'>
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
                {isSubmitted && error.location && <p className='validation-msg'>{error.location}</p>}
            </div>
            <div>
                <div className='flex flex-col items-center justify-center bg-transparent border-none'>
                    <button type='submit' className='custom-button bg-[#1D4ED8] mt-[3.5vh] py-[2vh] px-[2vw] rounded-sm text-[#fff] w-full'>Filter</button>
                </div>
            </div>
        </form>
        <div>
            <div className='block md:flex flex-row items-center my-[5vh] md:my-0'>
                <p className='text-xl md:text-xl md:font-semibold text-center md:text-left text-[#000] mr-[3vw]'>Choose Cinema</p>
                <p className='hidden md:block font-subtitle text-[#8692A6]'>39 Result</p>
            </div>
            <form onSubmit={submitForm}>
                <div className='flex flex-col md:flex-row gap-[1vh] justify-between items-center mt-[1vh] mb-[5vh] w-full'>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="cinema" id="ebv" value="ebv" checked={formData.cinema === "ebv"} />
                        <label className='label-radio' for="ebv">
                            <img className='w-[12vw] h-[5vh] object-contain' src="../../public/ebv.svg" alt="ebv" />
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="cinema" id="hiflix" value="hiflix" checked={formData.cinema === "hiflix"} />
                        <label className='label-radio' for="hiflix">
                            <img className='w-[12vw] h-[5vh] object-contain' src="../../public/hiflix.png" alt="hiflix" />
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="cinema" id="cineone" value="cineone21" checked={formData.cinema === "cineone21"} />
                        <label className='label-radio' for="cineone">
                            <img className='w-[12vw] h-[5vh] object-contain' src="../../public/cineone.svg" alt="cineone21" />
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="cinema" id="ebv-premiere" value="ebv-premiere" checked={formData.cinema === "ebv-premiere"} />
                        <label className='label-radio' for="ebv-premiere">
                            <img className='w-[12vw] h-[5vh] object-contain' src="../../public/ebv.svg" alt="ebv" />
                        </label>
                    </div>
                </div>
                {isSubmitted && error.cinema && <p className='validation-msg'>{error.cinema}</p>}
                <div className="hidden md:flex flex-row items-center justify-center">
                    <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>1</div>
                    <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>2</div>
                    <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>3</div>
                    <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>4</div>
                </div>
                <div className='flex justify-center'><button className='custom-button bg-[#1D4ED8] mt-[3.5vh] py-[2vh] px-[2vw] rounded-sm text-[#fff] w-full md:w-1/4'>Book Now</button></div>
            </form>
        </div>
    </section>
  )
}

export default Book
