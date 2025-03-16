import React from 'react'
import Show from '../assets/eye.svg'

function Profile() {
  return (
    <div>
      <section className='bg-[#fff] rounded-2xl my-[7vh] py-[7vh] px-[2vw]'>
          <p className='font-semibold border-b border-solid border-[#DEDEDE] pb-[3vh]'>Detail Information</p>
          <form className='grid grid-cols-2 grid-rows-2 my-[5vh] text-sm text-[#8692A6]'>
              <div>
                  <label for="firstname">First Name</label> 
                  <input className='form-input border-[#E6E6E6] rounded-xl w-9/10' type="text" name="firstname" placeholder="Jonas"/> 
                  <p className='validation-msg'>Data should be filled</p>
              </div>
              <div>
                  <label for="lastname">Last Name</label> 
                  <input className='form-input border-[#E6E6E6] rounded-xl w-9/10' type="text" name="lastname" placeholder="El Rodriguez"/> 
                  <p className='validation-msg'>Data should be filled</p>
              </div>
              <div>
                  <label for="email">Email</label> 
                  <input className='block form-input border-[#E6E6E6] rounded-xl w-9/10' type="email" name="email" placeholder="jonasrodrigu123@gmail.com"/> 
                  <p className='validation-msg'>Data should be filled</p>
              </div>
              <div>
                  <label for="phone">Phone Number</label> 
                  <div className='flex flex-row justify-between rounded-xl w-9/10 my-[1vh] px-[1vw] border border-solid border-[#E6E6E6]'>
                      <p className='py-[2vh] pr-[2vw]'>+62</p>
                      <input className='form-input border-none outline-none m-[0] w-9/10' type="text" name="phone"/>
                  </div>
                  <p className='validation-msg'>Data should be filled</p>
              </div>
          </form>
        </section>
        <section className='bg-[#fff] rounded-xl py-[7vh] px-[2vw]'>
          <p className='font-semibold border-b border-solid border-[#DEDEDE] pb-[3vh]'>Account and Privacy</p>
          <form className='grid grid-cols-2 grid-rows-1 text-sm text-[#8692A6] my-[5vh]'>
              <div>
                  <label for="newpass">New Password</label> 
                  <div className='flex flex-row justify-between rounded-xl w-9/10 my-[1vh] px-[1vw] border border-solid border-[#E6E6E6]'>
                      <input className='form-input border-none outline-none m-[0]' type="password" name="newpass"/>
                      <img className='cursor-pointer' src={Show} alt="See Password"/>
                  </div>
                  <p className='validation-msg'>Password not valid</p>
              </div>
              <div>
                  <label for="confirm">Confirm Password</label> 
                  <div className='flex flex-row justify-between rounded-xl w-9/10 my-[1vh] px-[1vw] border border-solid border-[#E6E6E6]'>
                      <input className='form-input border-none outline-none m-[0]' type="password" name="confirm"/>
                      <img className='cursor-pointer' src={Show} alt="See Password"/>
                  </div>
                  <p className='validation-msg'>Password did not match</p>
              </div>
          </form>
      </section>
      <button className='custom-button bg-[#1D4ED8] rounded-xl mt-[7vh] py-[2vh] w-1/2 text-[#fff]'>Update changes</button>
    </div>
  ) 
} 

export default Profile
