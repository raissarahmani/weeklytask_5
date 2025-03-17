import { useNavigate } from "react-router-dom"

function Total() {
    const navigate = useNavigate()
    const nextPage = (e) => {
    e.preventDefault()
    navigate("/now-playing/payment")
}

  return (
    <div className='w-1/4 ml-[1vw]'>
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
  )
}

export default Total
