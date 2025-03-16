import React from 'react'

import Googlepay from '../../assets/google-pay.png'
import Visa from "../../assets/visa.png";
import Gopay from '../../assets/gopay.png'
import Paypal from '../../assets/paypal.png'
import Dana from '../../assets/dana.png'
import Bca from '../../assets/bca.png'
import Bri from '../../assets/bri.png'
import Ovo from '../../assets/ovo.png'

function PaymentPage() {
  return (
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
                <input className='form-input border-[#E6E6E6]' type="text" name="name" placeholder="Jonas El Rodriguez"/> <br/>
                <p className='validation-msg'>Data should be filled</p>
                <label for="email">Email</label> <br/>
                <input className='form-input border-[#E6E6E6]' type="email" name="email" placeholder="jonasrodri123@gmail.com"/> <br/>
                <p className='validation-msg'>Data should be filled</p>
                <label for="phone">Phone Number</label> <br/>
                <div className='form-input border-[#E6E6E6] flex flex-row justify-between'>
                    <p>+62</p>
                    <input className='outline-none border-none ml-[1vw] w-full' type="text" name="phone"/> <br/>
                </div>
                <p className='validation-msg'>Data should be filled</p>
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
            <button className='custom-button bg-[#1D4ED8] text-sm text-[#fff] w-full py-[2vh]'>Pay your order</button>
        </div>
    </section>
  )
}

export default PaymentPage
