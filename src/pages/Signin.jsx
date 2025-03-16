import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Or from './Auth/Or'
import Socmed from './Auth/Socmed'

import Show from '../assets/eye.svg'

function Signin() {
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")
const [emailMsg, setEmailMsg] = useState("Fill email")
const [passMsg, setPassMsg] = useState("Fill password")
const [emailIsVisible, setEmailIsVisible] = useState(false)
const [passIsVisible, setPassIsVisible] = useState(false)
const [showPass, setShowPass] = useState(false)
const navigate = useNavigate()

const loginValid = (e) => {
  e.preventDefault()

  if (!email) {
    setEmailIsVisible(true)
    setEmailMsg("Data should be filled")
  } else if (!email.includes('@')) {
    setEmailIsVisible(true)
    setEmailMsg ("Email not valid")
  } else {
    setEmailIsVisible(false)
  }
  
  if (!pass) {
    setPassIsVisible(true)
    setPassMsg("Data should be filled")
    return
  } else if (pass.length < 8) {
    setPassIsVisible(true)
    setPassMsg("Password should at least has 8 characters")
    return
  } setPassIsVisible(false)

  let alphabetPass = pass.toLowerCase() !== pass.toUpperCase()
  let numPass = false
  for (let num of pass) {
    if (!isNaN(num)) {
        numPass = true
    }
  }
  if (!alphabetPass || !numPass) {
    setPassIsVisible(true)
    setPassMsg("Password should contain letters and numbers")
    return
  }

  if (email === "test@admin.com" && pass === "1234test") {
    navigate("/admin")
    return
  }

  const registeredUser = JSON.parse(localStorage.getItem("user"))
  if (email === registeredUser.email && pass === registeredUser.pass) {
    navigate("/")
    return
  } else if (email === registeredUser.email) {
    setEmailIsVisible(true)
    setPassIsVisible(true)  
    setEmailMsg("Incorrect email and password")
    setPassMsg("Incorrect email and password")
    return
  } else {
    setEmailIsVisible(true)
    setEmailMsg("User not registered. Please sign up")
    return
  }

  
}

const showPassword = (e) => {
  e.preventDefault()
  setShowPass((showPass) => !showPass)
}

  return (
    <div>
        <div className='mt-[5vh] mb-[1vh] mx-[2vw]'>
            <div className='font-semibold text-3xl my-[1vh] mx-[1vw]'>Welcome Back👋</div>
            <p className='text-lg text-[#A0A3BD] mt-[5vh] mb-[1vh] mx-[1vw]'>Sign in with your data that you entered during your registration</p>
        </div>
        <form onSubmit={loginValid}  className='relative mt-[3vh] mb-[1vh] px-[3vw] pt-[3vh] pb-[1vh] font-normal text-[#4E4B66]'>
            <label for="email">Email</label> <br/>
            <input onChange={(e) => setEmail(e.target.value)} className='form-input border-[#DEDEDE]' type="email" name="email" value={email} placeholder="Enter your email"/> <br/>
            <p className={`validation-msg ${emailIsVisible && emailMsg ? "visible" : "invisible"}`}>{emailMsg}</p>
            <label for="password">Password</label> <br/>
            <div className='flex rounded-sm pr-[1vw] mt-[2vh] border border-solid border-[#DEDEDE]'>
                <input onChange={(e) => setPass(e.target.value)} className='form-input border-none outline-none m-[0]' type={showPass ? "text" : "password"} name="password" value={pass} placeholder="Enter your password"/> <br/><br/>
                <img onClick={showPassword} className='cursor-pointer' src={Show} alt="Show Password"/>
            </div>
            <p className={`validation-msg ${passIsVisible && passMsg ? "visible" : "invisible"}`}>{passMsg}</p>
            <p className='text-right'><a href="">Forgot your password?</a></p>
            <button className='custom-button bg-[#1D4ED8] text-[#fff] font-normal text-sm my-[3vh] py-[2vh] w-full' type="submit"> Login </button>
        </form> 
        <Or />
        <Socmed />
    </div>
  )
}

export default Signin
