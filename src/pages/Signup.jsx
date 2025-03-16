import React from 'react'

import Steps from '../components/Steps'
import Or from './Auth/Or'
import Socmed from './Auth/Socmed'

import Show from '../assets/eye.svg'

function Signup() {
  return (
    <div>
      <Steps />
      <form className='relative mt-[3vh] mb-[1vh] px-[3vw] pt-[3vh] pb-[1vh] font-normal text-[#4E4B66]'>
          <label for="email">Email</label> <br/>
          <input className='form-input border-[#DEDEDE]' type="email" name="email" placeholder="Enter your email"/> <br/>
          <p className='validation-msg'>Email valid</p>
          <label for="password">Password</label> <br/>
          <div className='flex rounded-sm mt-[2vh] pr-[1vw] border border-solid border-[#DEDEDE]'>
              <input className='form-input border-none outline-none m-[0]' type="password" name="password" placeholder="Enter your password"/> <br/>
              <img className='cursor-pointer' src={Show} alt="Show Password"/>
          </div>
          <p className='validation-msg'>Pass valid</p>
          <input className='w-1/20 mt-[3vh]' type="checkbox" name="tnc" id="tnc"/>
          <label for="tnc">I agree to terms and conditions</label>
          <p className='validation-msg'>Required</p>
          <button className='custom-button bg-[#1D4ED8] text-[#fff] font-normal text-sm my-[3vh] py-[2vh] w-full' type="submit"> Join For Free Now </button>
      </form>
      <div className='text-center mb-[5vh]'>
          <p>Already have an account? <a className='text-[blue]' href="signin.jsx">Log In</a></p>
      </div>
      <Or />
      <Socmed />
    </div>
  )
}

export default Signup
