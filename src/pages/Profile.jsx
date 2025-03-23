import { useState, useEffect } from 'react'
import useLocalStorage from '../hook/useLocalStorage'

import Show from '../assets/eye.svg'

function Profile() {
    const [formProfile, setFormProfile] = useLocalStorage("userProfile", {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        pass: "",
        confirmpass: "",
    })
    const [error, setError] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [showPass, setShowPass] = useState(false)

    const formHandler = (e) => {
        setFormProfile({...formProfile,[e.target.name] : e.target.value})
    }

    useEffect(() => {
        let newError = {}
        if(!formProfile.firstname) newError.firstname = "Data should be filled"
        if(!formProfile.lastname) newError.lastname = "Data should be filled"
        if(!formProfile.email) {
            newError.email = "Data should be filled"
        } else if(!formProfile.email.includes('@')) {
            newError.email = "Email not valid"
        }

        if(!formProfile.phone) {
            newError.phone = "Data should be filled"
        } else if (formProfile.phone.length < 8) {
            newError.phone = "Phone number not valid"
        }

        if(!formProfile.pass) {
            newError.pass = "Data should be filled"
        } else if (formProfile.pass.length < 8) {
            newError.pass = "Password should at least have 8 characters"
        }

        let alphabetPass = formProfile.pass.toLowerCase() !== formProfile.pass.toUpperCase()
        let numPass = false
        for (let num of formProfile.pass) {
          if (!isNaN(num)) {
              numPass = true
          }
        }
        if (!alphabetPass || !numPass) newError.pass = "Password should contain letters and numbers"

        if(formProfile.confirmpass !== formProfile.pass) newError.confirmpass = "Password did not match"

        setError(newError)
        setIsFormValid(Object.keys(newError).length === 0)
    }, [formProfile])

    const buttonClicked = (e) => {
        e.preventDefault()
        setIsClicked(true)

        if (isFormValid) {
            localStorage.setItem("userProfile", JSON.stringify(formProfile))
        }
    }

    const showPassword = () => {
        setShowPass((showPass) => !showPass)
      }

  return (
    <div className='mx-[10vw] md:mx-0'>
      <section className='bg-[#fff] rounded-b-none md:rounded-b-2xl rounded-2xl mt-[7vh] md:my-[7vh] py-[7vh] px-[5vw] md:px-[2vw]'>
          <p className='font-semibold border-b border-solid border-[#DEDEDE] pb-[3vh]'>Detail Information</p>
          <form className='grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 my-[5vh] text-sm text-[#8692A6]'>
              <div>
                  <label for="firstname">First Name</label> 
                  <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-xl w-full md:w-9/10' type="text" name="firstname" value={formProfile.firstname || ""} placeholder="Jonas"/> 
                  {isClicked && error.firstname && <p className='validation-msg'>{error.firstname}</p>}
              </div>
              <div>
                  <label for="lastname">Last Name</label> 
                  <input onChange={formHandler} className='form-input border-[#E6E6E6] rounded-xl w-full md:w-9/10' type="text" name="lastname" value={formProfile.lastname || ""} placeholder="El Rodriguez"/> 
                  {isClicked && error.lastname && <p className='validation-msg'>{error.lastname}</p>}
              </div>
              <div>
                  <label for="email">Email</label> 
                  <input onChange={formHandler} className='block form-input border-[#E6E6E6] rounded-xl w-full md:w-9/10' type="email" name="email" value={formProfile.email || ""} placeholder="jonasrodrigu123@gmail.com"/> 
                  {isClicked && error.email && <p className='validation-msg'>{error.email}</p>}
              </div>
              <div>
                  <label for="phone">Phone Number</label> 
                  <div className='flex flex-row justify-between rounded-xl w-full md:w-9/10 my-[1vh] px-[1vw] border border-solid border-[#E6E6E6]'>
                      <p className='py-[2vh] pr-[2vw]'>+62</p>
                      <input onChange={formHandler} className='form-input border-none outline-none m-[0] w-9/10' type="text" name="phone" value={formProfile.phone || ""} />
                  </div>
                  {isClicked && error.phone && <p className='validation-msg'>{error.phone}</p>}
              </div>
          </form>
        </section>
        <section className='bg-[#fff] rounded-t-none md:rounded-t-2xl rounded-2xl pb-[7vh] md:py-[7vh] px-[5vw] md:px-[2vw]'>
          <p className='font-semibold border-b border-solid border-[#DEDEDE] pb-[3vh]'>Account and Privacy</p>
          <form className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 text-sm text-[#8692A6] my-[5vh]'>
              <div>
                  <label for="pass">New Password</label> 
                  <div className='flex flex-row justify-between rounded-xl w-full md:w-9/10 my-[1vh] px-[1vw] border border-solid border-[#E6E6E6]'>
                      <input onChange={formHandler} className='form-input border-none outline-none m-[0]' type={showPass ? "text" : "password"} name="pass" value={formProfile.pass || ""} />
                      <img onClick={showPassword} className='cursor-pointer' src={Show} alt="See Password"/>
                  </div>
                  {isClicked && error.pass && <p className='validation-msg'>{error.pass}</p>}
              </div>
              <div>
                  <label for="confirmpass">Confirm Password</label> 
                  <div className='flex flex-row justify-between rounded-xl w-full md:w-9/10 my-[1vh] px-[1vw] border border-solid border-[#E6E6E6]'>
                      <input onChange={formHandler} className='form-input border-none outline-none m-[0]' type={showPass ? "text" : "password"} name="confirmpass" value={formProfile.confirmpass || ""} />
                      <img onClick={showPassword} className='cursor-pointer' src={Show} alt="See Password"/>
                  </div>
                  {isClicked && error.confirmpass && <p className='validation-msg'>{error.confirmpass}</p>}
              </div>
          </form>
      </section>
      <button onClick={buttonClicked} className='custom-button bg-[#1D4ED8] rounded-xl my-[7vh] md:mt-[7vh] py-[2vh] w-full md:w-1/2 text-[#fff]'>Update changes</button>
    </div>
  ) 
} 

export default Profile
