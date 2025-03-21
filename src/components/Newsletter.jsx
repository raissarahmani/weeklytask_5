import React from 'react'

import Circle from "../assets/shape.png";

function Newsletter() {
  return (
    <section className='py-[5vh] px-[10vw]'>
        <div className='bg-[#2563EB] rounded-3xl py-[15vh] px-[10vw] relative'>
            <div className='newsletter-text text-3xl md:text-5xl text-center mb-[10vh]'>Subscribe to our newsletter</div>
            <form className='flex flex-col md:flex-row justify-between gap-[1vw] md:px-[10vw]'>
                <label for="firstname" hidden></label>
                <input className='newsletter-input w-full md:w-1/3' type="text" name="firstname" placeholder="First name" />
                <label for="email" hidden></label>
                <input className='newsletter-input w-full md:w-1/3' type="email" name="email" placeholder="Email address" />
                <button className='custom-button w-full md:w-1/3 bg-[#fff] text-[#2563EB] py-[2vh]' type="submit">Subscribe Now</button>
            </form>
            <p className='invisible font-semibold text-xs text-[#fff] my-[2vh] text-center'><span className='px-[1vw]'>Thank you!</span></p>
            <img className='absolute bottom-0 right-0' src={Circle} alt="" />
        </div>
    </section>
  )
}

export default Newsletter
