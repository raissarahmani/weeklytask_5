import React from 'react'
import Or from './Auth/Or'
import Socmed from './Auth/Socmed'

import Show from '../assets/eye.svg'

function Signin() {
  return (
    <div>
        <div className='mt-[5vh] mb-[1vh] mx-[2vw]'>
            <div className='font-semibold text-3xl my-[1vh] mx-[1vw]'>Welcome Back👋</div>
            <p className='text-lg text-[#A0A3BD] mt-[5vh] mb-[1vh] mx-[1vw]'>Sign in with your data that you entered during your registration</p>
        </div>
        <form className='relative mt-[3vh] mb-[1vh] px-[3vw] pt-[3vh] pb-[1vh] font-normal text-[#4E4B66]'>
            <label for="email">Email</label> <br/>
            <input className='form-input border-[#DEDEDE]' type="email" name="email" placeholder="Enter your email"/> <br/>
            <p className='validation-msg'>Email valid</p>
            <label for="password">Password</label> <br/>
            <div className='flex rounded-sm pr-[1vw] mt-[2vh] border border-solid border-[#DEDEDE]'>
                <input className='form-input border-none outline-none m-[0]' type="password" name="password" placeholder="Enter your password"/> <br/><br/>
                <img className='cursor-pointer' src={Show} alt="Show Password"/>
            </div>
            <p className='validation-msg'>Pass valid</p>
            <p className='text-right'><a href="">Forgot your password?</a></p>
            <button className='custom-button bg-[#1D4ED8] text-[#fff] font-normal text-sm my-[3vh] py-[2vh] w-full' type="submit"> Login </button>
        </form> 
        <Or />
        <Socmed />
    </div>
  )
}

export default Signin
