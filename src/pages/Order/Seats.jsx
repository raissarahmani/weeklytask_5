import { useNavigate } from 'react-router'
import useLocalStorage from '../../hook/useLocalStorage'

import Down from '../../assets/Arrow-black.png'
import Right from '../../assets/right-black.png'

function Seats() {
    const [formData, setFormData] = useLocalStorage("bookingDetails", {
        date: "",
        time: "",
        location: "",
        cinema: "",
        seats: [],
    })    
    const [movieDetails] = useLocalStorage("movieDetails", {})
    const [bookingDetails] = useLocalStorage("bookingDetails", {})
    const navigate = useNavigate()

    const seatHandler = (seatId) => {
        setFormData((prevData) => ({
            ...prevData,
            seats: (prevData.seats || []).includes(seatId) 
            ? (prevData.seats || []).filter((seat) => seat !== seatId)
            : [...(prevData.seats || []), seatId],
        }))
    }

    const rows = ["A", "B", "C", "D", "E", "F", "G"]
    const colsLeft = [1,2,3,4,5,6,7]
    const colsRight = [8,9,10,11,12,13,14]

    const changeMovie = () => {
        navigate("/now-playing")
    }

    const nextPage = () => {
        navigate("/now-playing/payment")
    }

  return (
    <>
        <section className='w-full md:w-3/4 rounded-md bg-[#fff] py-[5vh] px-[2vw]'>
            <div className='ticket'>
                <div className='col-span-1 row-span-3 flex justify-center items-center h-full md:overflow-hidden md:pr-[2vw] pb-[2vh]'>
                    <img className='object-cover object-top w-full h-full' src={movieDetails.poster || "/avenger.png"} alt={movieDetails.title || "Movie Poster"} />
                </div>
                <p className='md:col-span-2 row-span-1 font-semibold text-2xl text-center md:text-left text-[#000]'>{movieDetails.title || ""}</p>
                <div className='md:col-span-2 row-span-1 flex flex-row items-center justify-center md:justify-start'>
                    {movieDetails.genres 
                        ? movieDetails.genres.split(", ").map((genre, idx) => (
                            <div key={idx} className="movie-genre">{genre}</div>
                          ))
                        : <div className="text-gray-500">No Genre Available</div>}
                </div>
                <p className='col-span-1 row-span-1 my-[2vh] text-center md:text-left'>Regular - {bookingDetails.time || ""}</p>
                <button onClick={changeMovie} className='custom-button col-span-1 row-span-1 py-[1vh] bg-[#1D4ED8] text-[#fff] text-sm font-normal'>Change</button>
            </div>
            <div>
                <p className='font-medium text-lg md:text-2xl text-[#14142B] my-[5vh] mx-[2vw]'>Choose Your Seat</p>
                <div className='px-[1vw]'>
                    <p className='hidden md:block font-semibold text-[#4E4B66] text-center w-4/5'>Screen</p>
                    <div className='flex flex-row'>
                        <div className='hidden md:block flex flex-col mt-[4vh]'>
                            {rows.map((row) => (
                                <div key={row} className='seats bg-transparent my-[2vh]'>{row}</div>
                            ))}
                        </div>
                        <div className='flex flex-row justify-between w-full md:w-2/3'>
                            <div className={`grid grid-cols-${colsLeft.length} mt-[5vh] border-b border-[red] md:border-none`}>
                                {rows.map((row) => (
                                    colsLeft.map((col) => {
                                        const seatId = `${row}${col}`;
                                        const isSelected = (formData.seats || []).includes(seatId);
                                    
                                        return (
                                            <div 
                                                onClick={() => seatHandler(seatId)} 
                                                key={seatId} 
                                                className={`seats ${isSelected ? "bg-[#1D4ED8]" : "bg-[#D6D8E7]"}`}>
                                            </div>
                                        )
                                    })
                                ))}

                                {colsLeft.map((col) => (
                                    <div key={col} className='hidden md:block seats bg-transparent text-center'>{col}</div>
                                ))}
                            </div>
                            <div className={`grid grid-cols-${colsRight.length} mt-[5vh] border-b border-[red] md:border-none`}>
                                {rows.map((row) => (
                                    colsRight.map((col) => {
                                        const seatId = `${row}${col}`;
                                        const isSelected = (formData.seats || []).includes(seatId);
                                    
                                        return (
                                            <div 
                                                onClick={() => seatHandler(seatId)} 
                                                key={seatId} 
                                                className={`seats ${isSelected ? "bg-[#1D4ED8]" : "bg-[#D6D8E7]"}`}>
                                            </div>
                                        );
                                    })
                                ))}

                                {colsRight.map((col) => (
                                    <div key={col} className='hidden md:block seats bg-transparent text-center'>{col}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:text-lg my-[5vh] mx-[2vw]'>
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
        <div className='hidden md:block w-1/4 pl-[2vw]'>
          <section className='rounded-md bg-[#fff]'>
              <div className='py-[5vh] px-[5vw]'>
                  <img src={`/${bookingDetails.cinema || "logo"}.svg`} alt={bookingDetails.cinema || "Cinema"} />
              </div>
              <div className='py-[2vh] px-[2vw]'>
                  <div className='flex flex-row justify-between mb-[3vh]'>
                      <div className='text-xs text-[#6B6B6B]'>Movie selected</div>
                      <div className='font-semibold text-xs text-right text-[#14142B]'>{movieDetails.title || ""}</div>
                  </div>
                  <div className='flex flex-row justify-between mb-[3vh]'>
                  <div className='text-xs text-[#6B6B6B]'>
                      {bookingDetails.date
                          ? new Date(bookingDetails.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                          })
                          : "No date selected"}
                  </div>
                      <div className='font-semibold text-xs text-center text-[#14142B]'>{bookingDetails.time || ""}</div>
                  </div>
                  <div className='flex flex-row justify-between mb-[3vh]'>
                      <div className='text-xs text-[#6B6B6B]'>One ticket price</div>
                      <div className='font-semibold text-xs text-center text-[#14142B]'>$10</div>
                  </div>
                  <div className='flex flex-row justify-between mb-[3vh]'>
                      <div className='text-xs text-[#6B6B6B]'>Seat choosed</div>
                      <div className='font-semibold text-xs text-right text-[#14142B]'>{(bookingDetails.seats || [])
                      .sort((left,right) => {
                        const [rowLeft, colLeft] = [left[0], parseInt(left.slice((1),10))]
                        const [rowRight, colRight] = [right[0], parseInt(right.slice((1), 10))]
                        return rowLeft > rowRight ? 1 : (rowLeft < rowRight ? -1 : (colLeft > colRight ? 1 : (colLeft < colRight ? -1 : 0)))
                      })
                      .join(", ") || "No seat selected"}</div>
                  </div>
              </div>
              <div className='flex flex-row justify-between items-center py-[2vh] px-[2vw] border-t border-solid border-[#E6E6E6]'>
                  <div>Total Payment</div>
                  <div className='font-semibold text-[#1D4ED8] text-right'>${(bookingDetails.seats || []) ? (bookingDetails.seats || []).length * 10 : 0}</div>
              </div>
              <button onClick={nextPage} className='custom-button my-[6vh] mx-[2vw] py-[2vh] w-4/5 text-[#fff] text-sm bg-[#1D4ED8]'>Checkout now</button> 
          </section>
      </div>
    </>
  )
}

export default Seats
