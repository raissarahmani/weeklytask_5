import React from 'react'

import Circle from "../assets/shape.png";

function Newsletter() {
  return (
    <section className='py-[5vh] px-[10vw]'>
        <div className='bg-[#2563EB] rounded-3xl p-[15vh] relative'>
            <div className='newsletter-text text-center mb-[10vh]'>Subscribe to our newsletter</div>
            <form className='flex flex-row justify-between gap-[1vw] px-[10vw]'>
                <label for="firstname" hidden></label>
                <input className='newsletter-input' type="text" name="firstname" placeholder="First name" />
                <label for="email" hidden></label>
                <input className='newsletter-input' type="email" name="email" placeholder="Email address" />
                <button className='custom-button w-1/3 bg-[#fff] text-[#2563EB]' type="submit">Subscribe Now</button>
            </form>
            <p className='invisible font-semibold text-xs text-[#fff] my-[2vh] text-center'><span className='px-[1vw]'>Thank you!</span></p>
            <img className='absolute bottom-0 right-0' src={Circle} alt="" />
        </div>
    </section>
  )
}

export default Newsletter
