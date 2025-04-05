import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import useLocalStorage from '../../hook/useLocalStorage'

import Googlepay from '../../assets/google-pay.png'
import Visa from "../../assets/visa.png";
import Gopay from '../../assets/gopay.png'
import Paypal from '../../assets/paypal.png'
import Dana from '../../assets/dana.png'
import Bca from '../../assets/bca.png'
import Bri from '../../assets/bri.png'
import Ovo from '../../assets/ovo.png'

function PaymentPage() {
    const movieTitle = useSelector((state) => state.book?.title)
    const bookDate = useSelector((state) => state.book?.date)
    const bookTime = useSelector((state) => state.book?.time)
    const bookCinema = useSelector((state) => state.book?.cinema)
    const seats = useSelector((state) => state.book?.seats)
    const total = useSelector((state) => state.book?.total)
    
    const [formPayment, setFormPayment] = useLocalStorage("paymentDetails", {
        name: "",
        email: "",
        phone: "",
        payment: "",
    })
    const [error, setError] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()

    const formHandler = (e) => {
        setFormPayment({...formPayment,[e.target.name] : e.target.value})
    }

    useEffect(() => {
        let newError = {}
        if(!formPayment.name) newError.name = "Data should be filled"
        
        if(!formPayment.email) {
            newError.email = "Data should be filled"
        } else if (!formPayment.email.includes('@')) {
            newError.email = "Email not valid"
        }

        if(!formPayment.phone) {
            newError.phone = "Data should be filled"
        } else if (formPayment.phone.length < 8) {
            newError.phone = "Phone number not valid"
        }
        if(!formPayment.payment) newError.payment = "Data should be filled"

        setError(newError)
        setIsFormValid(Object.keys(newError).length === 0)
    }, [formPayment])

    const submitForm = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        if (isFormValid) {
            localStorage.setItem("paymentDetails", JSON.stringify(formPayment))
            setIsModalOpen(true)
        }
    }

    const nextPage = () => {
        navigate("/now-playing/success")
    }

  return (
    <>
    <section className='bg-[#fff] mx-[3vw] md:mx-[7vw] py-[10vh] px-[4vw] rounded-md text-left'>
        <div>
            <p className='font-semibold text-xl md:text-2xl text-[#14142B]'>Payment Info</p>
            <form className='my-[5vh] text-sm text-[#8692A6]'>
                <label for="date">DATE & TIME</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6]' type="text" name="date" value={`${bookDate ? 
                    new Date(bookDate).toLocaleDateString("en-US", {weekday: "long", day: "numeric", month: "long", year: "numeric",}) : "No date selected"} at ${bookTime }`} readOnly/> <br/><br/>
                <label for="title">MOVIE TITLE</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6]' type="text" name="title" value={movieTitle} readOnly/> <br/><br/>
                <label for="cinema">CINEMA NAME</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6]' type="text" name="cinema" value={bookCinema} readOnly/> <br/><br/>
                <label for="qty">NUMBER OF TICKETS</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6]' type="text" name="qty" value={`${seats.length} pieces`} readOnly/> <br/><br/>
                <label for="total">TOTAL PAYMENT</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6] text-[#1D4ED8] font-bold' type="text" name="total" value={`$${total}`} readOnly/> <br/><br/>
            </form>
        </div>
        <div>
            <p className='font-semibold text-xl md:text-2xl text-[#14142B]'>Personal Information</p>
            <form onSubmit={submitForm} className='my-[5vh] text-sm text-[#8692A6]'>
                <label for="name">Full Name</label> <br/>
                <input onChange={formHandler} className='form-input border-[#E6E6E6]' type="text" name="name" value={formPayment.name} placeholder="Jonas El Rodriguez"/> <br/>
                {isSubmitted && error.name && <p className='validation-msg'>{error.name}</p>}
                <label for="email">Email</label> <br/>
                <input onChange={formHandler} className='form-input border-[#E6E6E6]' type="email" name="email" value={formPayment.email} placeholder="jonasrodri123@gmail.com"/> <br/>
                {isSubmitted && error.email && <p className='validation-msg'>{error.email}</p>}
                <label for="phone">Phone Number</label> <br/>
                <div className='form-input border-[#E6E6E6] flex flex-row justify-between'>
                    <p>+62</p>
                    <input onChange={formHandler} className='outline-none border-none ml-[1vw] w-full' type="text" name="phone" value={formPayment.phone}/> <br/>
                </div>
                {isSubmitted && error.phone && <p className='validation-msg'>{error.phone}</p>}
            </form>
        </div>
        <div>
            <p className='font-semibold text-xl md:text-2xl text-[#14142B]'>Payment Method</p>
            <form onSubmit={submitForm}>
                <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 mt-[5vh] gap-[1vw]'>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="payment" id="gpay" value="gpay" checked={formPayment.payment === "gpay"} />
                        <label className='label-radio' for="gpay">
                            <img src={Googlepay} alt="Google Pay"/>
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="payment" id="visa" value="visa" checked={formPayment.payment === "visa"} />
                        <label className='label-radio' for="visa">
                            <img src={Visa} alt="Visa"/>
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="payment" id="gopay" value="gopay" checked={formPayment.payment === "gopay"} />
                        <label className='label-radio' for="gopay">
                            <img src={Gopay} alt="Gopay"/>
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="payment" id="paypal" value="paypal" checked={formPayment.payment === "paypal"} />
                        <label className='label-radio' for="paypal">
                            <img src={Paypal} alt="Paypal"/>
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="payment" id="dana" value="dana" checked={formPayment.payment === "dana"} />
                        <label className='label-radio' for="dana">
                            <img src={Dana} alt="Dana"/>
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="payment" id="bca" value="bca" checked={formPayment.payment === "bca"} />
                        <label className='label-radio' for="bca">
                            <img src={Bca} alt="BCA"/>
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="payment" id="bri" value="bri" checked={formPayment.payment === "bri"} />
                        <label className='label-radio' for="bri">
                            <img src={Bri} alt="BRI"/>
                        </label>
                    </div>
                    <div className='cinema-radio'>
                        <input onChange={formHandler} className='hidden peer' type="radio" name="payment" id="ovo" value="ovo" checked={formPayment.payment === "ovo"} />
                        <label className='label-radio' for="ovo">
                            <img src={Ovo} alt="Ovo"/>
                        </label>
                    </div>
                </div>
                {isSubmitted && error.payment && <p className='validation-msg'>{error.payment}</p>}
                <button className='custom-button bg-[#1D4ED8] text-sm text-[#fff] w-full py-[2vh] my-[5vh]'>Pay your order</button>
            </form>
        </div>
    </section>
    {isModalOpen && (
    <div className='absolute inset-0 bg-[#00000099] flex justify-center items-center z-3'>
        <section className='bg-[#fff] rounded-md absolute top-1/2 left-1/2 py-[5vh] px-[10vw] md:px-[3vw] transform -translate-x-1/2 -translate-y-1/2 z-4'>
            <p className='text-center font-bold text-2xl'>Payment Info</p>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between my-[7vh]'>
                <p className='text-[#8692A6] text-sm'>No. Rekening Virtual :</p>
                <div className='flex flex-row items-center text-right font-semibold text-sm md:text-lg mt-[2vh] md:mt-0'>
                    <p>12321328913829724</p>
                    <button className='custom-button text-[#1D4ED8] text-sm font-normal px-[1vw] py-[1vh] md:py-[2vh] ml-[1vw]'>Copy</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between my-[7vh]'>
                <p className='text-[#8692A6] text-sm'>Total Payment :</p>
                <p className='font-bold text-lg text-[#1D4ED8] text-right'>{`$${total}`}</p>
            </div>
            <p className='text-sm md:text-basis text-[#A0A3BD]'>Pay this payment bill before it is due, <span className='text-[D00707]'>on June 23, 2023.</span> If the bill has not been paid by the specified time, it will be forfeited</p>
            <div className='flex flex-col items-center justify-between my-[7vh] gap-[1vh]'>
                <button onClick={nextPage} className='custom-button bg-[#1D4ED8] text-[#fff] w-full py-[2vh] font-semibold text-sm'>Check Payment</button>
                <button onClick={() => setIsModalOpen(false)} className='custom-button text-[#1D4ED8] bg-[#fff] w-full py-[2vh] font-semibold text-sm'>Pay Later</button>
            </div>
        </section>
    </div>
    )}
    </>
  )
}

export default PaymentPage
