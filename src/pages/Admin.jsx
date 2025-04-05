import React from 'react'
import Graph from "../assets/graph.png"

function Admin() {
  return (
    <>
      <section className='bg-[#fff] rounded-3xl py-[7vh] px-[5vw] my-[7vh]'>
            <div>
                <p className='font-semibold text-2xl mb-[3vh]'>Sales Chart</p>
                <form className='flex flex-row justify-between gap-[1vw]'>
                    <div className='w-1/3'>
                        <label for="movies" hidden></label>
                        <select className='font-normal text-[#4E4B68] bg-[#EFF0F6] rounded-lg w-full py-[2vh] px-[1vw] border border-solid border-[#EFF0F6]' name="movies">
                            <option className='text-[#4E4B68]' value="" hidden>Movies Name</option>
                            <option className='text-[#4E4B68]' value="Spiderman: Homecoming">Spiderman: Homecoming</option>
                            <option className='text-[#4E4B68]' value="Tennet">Tennet</option>
                            <option className='text-[#4E4B68]' value="The Witches">The Witches</option>
                            <option className='text-[#4E4B68]' value="Black Widow">Black Widow</option>
                            <option className='text-[#4E4B68]' value="The Lion King">The Lion King</option>
                            <option className='text-[#4E4B68]' value="John Wick 3">John Wick 3</option>
                            <option className='text-[#4E4B68]' value="Roblox">Roblox</option>
                        </select>
                    </div>
                    <div className='w-1/3'>
                        <label for="periode"></label>
                        <select className='font-normal text-[#4E4B68] bg-[#EFF0F6] rounded-lg w-full py-[2vh] px-[1vw] border border-solid border-[#EFF0F6]' name="periode">
                            <option className='text-[#4E4B68]' value="" hidden>Periode</option>
                            <option className='text-[#4E4B68]' value="daily">Daily</option>
                            <option className='text-[#4E4B68]' value="weekly">Weekly</option>
                            <option className='text-[#4E4B68]' value="monthly">Monthly</option>
                        </select>
                    </div>
                    <div className='w-1/3'>
                        <button className='custom-button bg-[#1D4ED8] text-[#fff] font-normal py-[1.5vh] px-[1vw] w-full' type="submit">Filter</button>
                    </div>
                </form>
            </div>
            <div className='relative'>
                <p className='font-normal text-sm my-[5vh]'>Avengers: End Game</p>
                <div className='flex flex-row justify-between items-end relative mt-[5vh] mb-[10vh] h-[52vh]'>
                    <div className='absolute top-0 left-0 flex flex-col justify-between w-1/10 h-full'>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$800</p>
                        </div>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$600</p>
                        </div>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$400</p>
                        </div>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$200</p>
                        </div>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$0</p>
                        </div>
                    </div>
                    <div className='flex items-end justify-right w-9/10 h-full pl-[6vw]'>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Jan</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Feb</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Mar</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Apr</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>May</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Jun</div>
                        </div>
                    </div>
                </div>
                <img className='absolute bottom-0 left-3/25 w-4/5' src={Graph} alt="Sales Graph"/>
            </div>
        </section>
        <section className='bg-[#fff] rounded-3xl py-[7vh] px-[5vw] my-[7vh]'>
            <div>
                <p className='font-semibold text-2xl mb-[3vh]'>Ticket Sales</p>
                <form className='flex flex-row justify-between gap-[1vw]'>
                    <div className='w-1/3'>
                        <label for="category" hidden></label>
                        <select className='font-normal text-[#4E4B68] bg-[#EFF0F6] rounded-lg w-full py-[2vh] px-[1vw] border border-solid border-[#EFF0F6]' name="category">
                            <option className='text-[#4E4B68]' value="" hidden>Category</option>
                            <option className='text-[#4E4B68]' value="Adventure">Adventure</option>
                            <option className='text-[#4E4B68]' value="Action">Action</option>
                            <option className='text-[#4E4B68]' value="Comedy">Comedy</option>
                            <option className='text-[#4E4B68]' value="Sci-fi">Sci-Fi</option>
                        </select>
                    </div>
                    <div className='w-1/3'>
                        <label for="location"></label>
                        <select className='font-normal text-[#4E4B68] bg-[#EFF0F6] rounded-lg w-full py-[2vh] px-[1vw] border border-solid border-[#EFF0F6]' name="location">
                            <option className='text-[#4E4B68]' value="" hidden>Location</option>
                            <option className='text-[#4E4B68]' value="Jakarta">Jakarta</option>
                            <option className='text-[#4E4B68]' value="Bandung">Bandung</option>
                            <option className='text-[#4E4B68]' value="Semarang">Semarang</option>
                            <option className='text-[#4E4B68]' value="Surabaya">Surabaya</option>
                            <option className='text-[#4E4B68]' value="Medan">Medan</option>
                            <option className='text-[#4E4B68]' value="Palembang">Palembang</option>
                            <option className='text-[#4E4B68]' value="Samarinda">Samarinda</option>
                            <option className='text-[#4E4B68]' value="Banjarmasin">Banjarmasin</option>
                            <option className='text-[#4E4B68]' value="Manado">Manado</option>
                            <option className='text-[#4E4B68]' value="Makassar">Makassar</option>
                            <option className='text-[#4E4B68]' value="Denpasar">Denpasar</option>
                        </select>
                    </div>
                    <div className='w-1/3'>
                        <button className='custom-button bg-[#1D4ED8] text-[#fff] font-normal py-[1.5vh] px-[1vw] w-full' type="button">Filter</button>
                    </div>
                </form>
            </div>
            <div className='relative'>
                <p className='font-normal text-sm my-[5vh]'>Adventure, Purwokerto</p>
                <div className='flex flex-row justify-between items-end relative mt-[5vh] mb-[10vh] h-[52vh]'>
                    <div className='absolute top-0 left-0 flex flex-col justify-between w-1/10 h-full'>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$800</p>
                        </div>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$600</p>
                        </div>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$400</p>
                        </div>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$200</p>
                        </div>
                        <div className='relative'>
                            <p className='text-[#999999] text-right text-xs'>$0</p>
                        </div>
                    </div>
                    <div className='flex items-end justify-right w-9/10 h-full pl-[6vw]'>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Jan</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Feb</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Mar</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Apr</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>May</div>
                        </div>
                        <div className='bg-[#fff] inline-block relative h-1/100 mx-[0.5vw] w-1/4'>
                            <div className='absolute -bottom-[8vh] text-center text-[#999999] text-sm w-full'>Jun</div>
                        </div>
                    </div>
                </div>
                <img className='absolute bottom-0 left-3/25 w-4/5' src={Graph} alt="Sales Graph"/>
                <div></div>
            </div>
        </section>
    </>
  )
}

export default Admin
