import { useState } from 'react';
import { useNavigate } from 'react-router';

import Googlepay from '../../assets/google-pay.png'
import Visa from "../../assets/visa.png";
import Gopay from '../../assets/gopay.png'
import Paypal from '../../assets/paypal.png'
import Dana from '../../assets/dana.png'
import Bca from '../../assets/bca.png'
import Bri from '../../assets/bri.png'
import Ovo from '../../assets/ovo.png'

function PaymentPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [payMethod, setPayMethod] = useState("")
    const [isNameVisible, setIsNameVisible] = useState(false)
    const [nameMsg, setNameMsg] = useState("Fill name")
    const [isEmailVisible, setIsEmailVisible] = useState(false)
    const [emailMsg, setEmailMsg] = useState("Fill email")
    const [isPhoneVisible, setIsPhoneVisible] = useState(false)
    const [phoneMsg, setPhoneMsg] = useState("Fill phone number")
    const [isRadioVisible, setIsRadioVisible] = useState(false)
    const [radioMsg, setRadioMsg] = useState("Choose payment")
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const navigate = useNavigate()

    const payOrder = (e) => {
        e.preventDefault()

        if (!name) {
            setIsNameVisible(true)
            setNameMsg("Data should be filled")
        } else {
          setIsNameVisible(false)
        }

        let fullname = name.toLowerCase() !== name.toUpperCase()
        if (!fullname) {
            setIsNameVisible(true)
            setNameMsg("Name should only contain alphabet")
        }

        if (!email) {
            setIsEmailVisible(true)
            setEmailMsg("Data should be filled")
        } else if (!email.includes('@')) {
          setIsEmailVisible(true)
          setEmailMsg ("Email not valid")
        } else {
          setIsEmailVisible(false)
        }

        if (!phone) {
          setIsPhoneVisible(true)
          setPhoneMsg("Data should be filled")
        } else if (phone.length < 8) {
          setIsPhoneVisible(true)
          setPhoneMsg ("Phone not valid")
        } else {
          setIsPhoneVisible(false)
        }

        
    }
    const nextPage = (e) => {
    e.preventDefault()
    navigate("/now-playing/success")
}

  return (
    <>
    <section className='bg-[#fff] mx-[7vw] py-[10vh] px-[4vw] rounded-md text-left'>
        <div>
            <p className='font-semibold text-2xl text-[#14142B]'>Payment Info</p>
            <form className='my-[5vh] text-sm text-[#8692A6]'>
                <label for="date">DATE & TIME</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6]' type="text" name="date" value="Tuesday, 07 July 2020 at 02:00pm" readonly/> <br/><br/>
                <label for="title">MOVIE TITLE</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6]' type="text" name="title" value="Spider-Man:Homecoming" readonly/> <br/><br/>
                <label for="cinema">CINEMA NAME</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6]' type="text" name="cinema" value="CineOne21 Cinema" readonly/> <br/><br/>
                <label for="qty">NUMBER OF TICKETS</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6]' type="text" name="qty" value="3 pieces" readonly/> <br/><br/>
                <label for="total">TOTAL PAYMENT</label> <br/>
                <input className='form-input pl-0 border-none border-[#E6E6E6] text-[#1D4ED8] font-bold' type="text" name="total" value="$30.00" readonly/> <br/><br/>
            </form>
        </div>
        <div>
            <p className='font-semibold text-2xl text-[#14142B]'>Personal Information</p>
            <form className='my-[5vh] text-sm text-[#8692A6]'>
                <label for="name">Full Name</label> <br/>
                <input onChange={(e) => setName(e.target.value)} className='form-input border-[#E6E6E6]' type="text" name="name" value={name} placeholder="Jonas El Rodriguez"/> <br/>
                <p className={`validation-msg ${isNameVisible && nameMsg ? 'visible' : 'invisible'}`}>Data should be filled</p>
                <label for="email">Email</label> <br/>
                <input onChange={(e) => setEmail(e.target.value)} className='form-input border-[#E6E6E6]' type="email" name="email" value={email} placeholder="jonasrodri123@gmail.com"/> <br/>
                <p className={`validation-msg ${isEmailVisible && emailMsg ? 'visible' : 'invisible'}`}>Data should be filled</p>
                <label for="phone">Phone Number</label> <br/>
                <div className='form-input border-[#E6E6E6] flex flex-row justify-between'>
                    <p>+62</p>
                    <input onChange={(e) => setPhone(e.target.value)} className='outline-none border-none ml-[1vw] w-full' type="text" name="phone" value={phone}/> <br/>
                </div>
                <p className={`validation-msg ${isPhoneVisible && phoneMsg ? 'visible' : 'invisible'}`}>Data should be filled</p>
            </form>
        </div>
        <div>
            <p className='font-semibold text-2xl text-[#14142B]'>Payment Method</p>
            <form className='grid grid-cols-4 grid-rows-2 mt-[5vh] gap-[1vw]'>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="pay" id="gpay" value="gpay"/>
                    <label className='label-radio' for="gpay">
                        <img src={Googlepay} alt="Google Pay"/>
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="pay" id="visa" value="visa"/>
                    <label className='label-radio' for="visa">
                        <img src={Visa} alt="Visa"/>
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="pay" id="gopay" value="gopay"/>
                    <label className='label-radio' for="gopay">
                        <img src={Gopay} alt="Gopay"/>
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="pay" id="paypal" value="paypal"/>
                    <label className='label-radio' for="paypal">
                        <img src={Paypal} alt="Paypal"/>
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="pay" id="dana" value="dana"/>
                    <label className='label-radio' for="dana">
                        <img src={Dana} alt="Dana"/>
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="pay" id="bca" value="bca"/>
                    <label className='label-radio' for="bca">
                        <img src={Bca} alt="BCA"/>
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="pay" id="bri" value="bri"/>
                    <label className='label-radio' for="bri">
                        <img src={Bri} alt="BRI"/>
                    </label>
                </div>
                <div className='cinema-radio'>
                    <input className='hidden' type="radio" name="pay" id="ovo" value="ovo"/>
                    <label className='label-radio' for="ovo">
                        <img src={Ovo} alt="Ovo"/>
                    </label>
                </div>
            </form>
            <p className='validation-msg'>Choose payment method</p>
            <button onClick={payOrder} className='custom-button bg-[#1D4ED8] text-sm text-[#fff] w-full py-[2vh]'>Pay your order</button>
        </div>
    </section>
    <section>
        <p className='text-center font-bold text-2xl'>Payment Info</p>
        <div className='flex flex-row items-center justify-between my-[7vh]'>
            <p className='text-[#8692A6] text-sm'>No. Rekening Virtual :</p>
            <div className='flex flex-row items-center text-right font-semibold text-lg'>
                <p>12321328913829724</p>
                <button className='custom-button text-[#1D4ED8] text-sm font-normal px-[1vw] py-[2vh] ml-[1vw]'>Copy</button>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between my-[7vh]'>
            <p className='text-[#8692A6] text-sm'>Total Payment :</p>
            <p className='font-bold text-lg text-[#1D4ED8] text-right'>$30</p>
        </div>
        <p className='text-[#A0A3BD]'>Pay this payment bill before it is due, <span className='text-[D00707]'>on June 23, 2023.</span> If the bill has not been paid by the specified time, it will be forfeited</p>
        <div className='flex flex-col items-center justify-between my-[7vh] gap-[1vh]'>
            <button onClick={nextPage} className='custom-button bg-[#1D4ED8] text-[#fff] w-full py-[2vh] font-semibold text-sm'>Check Payment</button>
            <button className='custom-button text-[#1D4ED8] bg-[#fff] w-full py-[2vh] font-semibold text-sm'>Pay Later</button>
        </div>
    </section>
    </>
  )
}

export default PaymentPage
