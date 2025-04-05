import { useState, useEffect } from "react"
import useLocalStorage from "../hook/useLocalStorage"
import check from "../assets/check.svg"

function AdminAddMovie() {
const [addMovie, setAddMovie] = useLocalStorage("newMovie", {
    poster: "",
    title: "",
    genres: "",
    release: "",
    hours: "",
    minutes: "",
    director: "",
    casts: "",
    synopsis: "",
    location: "",
    date: "",
    time: ""
})
    const [error, setError] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const formHandler = (e) => {
        setAddMovie({...addMovie,[e.target.name] : e.target.value})
    }

    const validateForm = () => {
        let newError = {}
        if(!addMovie.title) newError.title = "Data should be filled"
        if(!addMovie.genres) newError.genres = "Data should be filled"
        if(!addMovie.release) newError.release = "Data should be filled"
        if(!addMovie.hours) newError.hours = "Data should be filled"
        if(!addMovie.minutes) newError.minutes = "Data should be filled"
        if(!addMovie.director) newError.director = "Data should be filled"
        if(!addMovie.casts) newError.casts = "Data should be filled"
        if(!addMovie.synopsis) newError.synopsis = "Data should be filled"
        if(!addMovie.location) newError.location = "Data should be filled"
        if(!addMovie.date) newError.date = "Data should be filled"
        return newError
    }

    useEffect(() => {
        const validateDetails = validateForm()
        setError(validateDetails)
    }, [addMovie])

    const submitForm = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        const validateDetails = validateForm(addMovie)
        setError(validateDetails)

        if (Object.keys(validateDetails).length === 0) {
            localStorage.setItem("newMovie", JSON.stringify(addMovie))
            setIsModalOpen(true)
        }
    }

  return (
    <>
      <section className='bg-[#fff] rounded-md py-[10vh] px-[4vw] text-left'>
          <p className='font-semibold text-2xl'>Add New Movie</p>
          <form onSubmit={submitForm} className='my-[5vh] mx-[1vw] text-[#696F79] border-b'>
              <label for="poster">Upload Image</label> <br/>
              <input onChange={(e) => {
                const file = e.target.files[0]
                setAddMovie({...addMovie, poster: file.name || ""})
              }} 
                className='form-input border-[#E6E6E6] rounded-sm m-[0] text-[#696F79]' type="file" name="poster" value={addMovie.poster}/><br/>
              {isSubmitted && error.poster && <p className='validation-msg'>{error.poster}</p>}
              <label for="title">Movie Name</label> <br/>
              <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-sm m-[0]' type="text" name="title" value={addMovie.title} placeholder="Spider-Man: Homecoming"/> <br/>
              {isSubmitted && error.title && <p className='validation-msg'>{error.title}</p>}
              <label for="genres">Category</label> <br/>
              <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-sm m-[0]' type="text" name="genres" value={addMovie.genres} placeholder="Action, Adventure, Sci-fi"/> <br/>
              {isSubmitted && error.genres && <p className='validation-msg'>{error.genres}</p>}
              <div className='flex flex-row justify-between items-center'>
                  <div className='w-1/2 mr-[2vw]'>
                      <label for="release">Release Date</label> <br/>
                      <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-sm m-[0] text-[#696F79]' type="date" name="release" value={addMovie.release}/>
                      {isSubmitted && error.release && <p className='validation-msg'>{error.release}</p>}
                  </div>
                  <div className='flex-col'>
                      <label for="hours">Duration</label> <br/>
                      <div className='flex flex-row gap-[2vw] w-1/2'>
                          <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-sm m-[0] w-7/10' type="number" name="hours" value={addMovie.hours} placeholder="2"/>
                          <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-sm m-[0] w-7/10' type="number" name="minutes" value={addMovie.minutes} placeholder="13"/>
                      </div>
                      {isSubmitted && error.hours && <p className='validation-msg'>{error.hours}</p>}
                  </div>
              </div>
              <label for="director">Director Name</label> <br/>
              <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-sm m-[0]' type="text" name="director" value={addMovie.director} placeholder="Jon Watts"/> <br/>
              {isSubmitted && error.director && <p className='validation-msg'>{error.director}</p>}
              <label for="casts">Casts</label> <br/>
              <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-sm m-[0]' type="text" name="casts" value={addMovie.casts} placeholder="Tom Holland, Michael Keaton, Robert Downey Jr."/> <br/>
              {isSubmitted && error.casts && <p className='validation-msg'>{error.casts}</p>}
              <label for="synopsis">Synopsis</label><br/>
              <textarea onChange={formHandler} className='form-input border-[#E6E6E6] rounded-sm m-[0]' name="synopsis" value={addMovie.synopsis}></textarea>
              {isSubmitted && error.synopsis && <p className='validation-msg'>{error.synopsis}</p>}
              <label for="location">Add Location</label> <br/>
              <select className='form-input border-[#E6E6E6] rounded-sm m-[0] text-[#696F79]' name="location" onChange={formHandler}>
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
              {isSubmitted && error.location && <p className='validation-msg'>{error.location}</p>}
              <label for="date">Set Date & Time</label> <br/>
              <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-sm m-[0] text-[#696F79]' type="date" name="date" value={addMovie.date}/> <br/>
              {isSubmitted && error.date && <p className='validation-msg'>{error.date}</p>}
              <div className='flex flex-row items-center gap-[5vw]'>
                  <div className='text-[#5F2EEA] text-center text-xl my-[2vh] py-[0.5vh] px-[1vw] rounded-sm w-[5vw] border border-[#5F2EEA] cursor-pointer'>+</div>
                  <p>08.30am</p>
                  <p>10.30pm</p>
              </div>
              <button className='custom-button bg-[#1D4ED8] text-[#fff] py-[1vh] w-full' type="submit">Save Movie</button>
          </form>
      </section>
      {isModalOpen && (
        <div className='fixed inset-0 bg-[#00000099] flex justify-center items-center z-3'>
            <section className='bg-[#fff] rounded-md absolute top-1/2 left-1/2 py-[5vh] px-[10vw] md:px-[3vw] transform -translate-x-1/2 -translate-y-1/2 z-4'>
                <p className='text-center font-bold text-2xl'>New Movie Added</p>
                <div className="flex items-center justify-center my-[3vh]">
                <img src={check} alt="" className="w-1/2 h-1/2"/>
                </div>
                <button onClick={() => setIsModalOpen(false)} className='custom-button text-[#1D4ED8] bg-[#fff] w-full py-[2vh] font-semibold text-sm'>OK</button>
            </section>
        </div>
        )}
    </>
  )
}

export default AdminAddMovie
