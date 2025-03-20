import React from 'react'

function AdminAddMovie() {
  return (
    <>
      <section className='bg-[#fff] rounded-md py-[10vh] px-[4vw] text-left'>
          <p className='font-semibold text-2xl'>Add New Movie</p>
          <form className='my-[5vh] mx-[1vw] text-[#696F79] border-b'>
              <label for="upload">Upload Image</label> <br/>
              <input className='form-input border-[#E6E6E6] rounded-sm m-[0] text-[#696F79]' type="file" name="upload"/><br/>
              <p className='validation-msg'>Data should be filled</p>
              <label for="name">Movie Name</label> <br/>
              <input className='form-input border-[#E6E6E6] rounded-sm m-[0]' type="text" name="name" placeholder="Spider-Man: Homecoming"/> <br/>
              <p className='validation-msg'>Data should be filled</p>
              <label for="category">Category</label> <br/>
              <input className='form-input border-[#E6E6E6] rounded-sm m-[0]' type="text" name="category" placeholder="Action, Adventure, Sci-fi"/> <br/>
              <p className='validation-msg'>Data should be filled</p>
              <div className='flex flex-row justify-between items-center'>
                  <div className='w-1/2 mr-[2vw]'>
                      <label for="releaseDate">Release Date</label> <br/>
                      <input className='form-input border-[#E6E6E6] rounded-sm m-[0] text-[#696F79]' type="date" name="releaseDate"/>
                      <p className='validation-msg'>Data should be filled</p>
                  </div>
                  <div className='flex-col'>
                      <label for="duration">Duration</label> <br/>
                      <div className='flex flex-row gap-[2vw] w-1/2'>
                          <input className='form-input border-[#E6E6E6] rounded-sm m-[0] w-7/10' type="number" name="duration" placeholder="2"/>
                          <input className='form-input border-[#E6E6E6] rounded-sm m-[0] w-7/10' type="number" name="duration" placeholder="13"/>
                      </div>
                      <p className='validation-msg'>Data should be filled</p>
                  </div>
              </div>
              <label for="director">Director Name</label> <br/>
              <input className='form-input border-[#E6E6E6] rounded-sm m-[0]' type="text" name="director" placeholder="Jon Watts"/> <br/>
              <p className='validation-msg'>Data should be filled</p>
              <label for="cast">Casts</label> <br/>
              <input className='form-input border-[#E6E6E6] rounded-sm m-[0]' type="text" name="cast" placeholder="Tom Holland, Michael Keaton, Robert Downey Jr."/> <br/>
              <p className='validation-msg'>Data should be filled</p>
              <label for="synopsis">Synopsis</label><br/>
              <textarea className='form-input border-[#E6E6E6] rounded-sm m-[0]' name="synopsis"></textarea>
              <p className='validation-msg'>Data should be filled</p>
              <label for="loc">Add Location</label> <br/>
              <select className='form-input border-[#E6E6E6] rounded-sm m-[0] text-[#696F79]' name="loc">
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
              <p className='validation-msg'>Data should be filled</p>
              <label for="date">Set Date & Time</label> <br/>
              <input className='form-input border-[#E6E6E6] rounded-sm m-[0] text-[#696F79]' type="date" name="date"/> <br/>
              <p className='validation-msg'>Data should be filled</p>
              <div className='flex flex-row items-center gap-[5vw]'>
                  <div className='text-[#5F2EEA] text-center text-xl my-[2vh] py-[0.5vh] px-[1vw] rounded-sm w-[5vw] border border-[#5F2EEA] cursor-pointer'>+</div>
                  <p>08.30am</p>
                  <p>10.30pm</p>
              </div>
          </form>
          <button className='custom-button bg-[#1D4ED8] text-[#fff] py-[1vh] w-full' type="button">Save Movie</button>
      </section>
    </>
  )
}

export default AdminAddMovie
