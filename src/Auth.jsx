import React from 'react'
import Login from './pages/Auth/Login'
import Background from './assets/avenger.png'

function Auth() {
  return (
    <div className='bg-[50%_40%] z-0 relative before:content-[""] before:absolute before:inset-0 before:-z-1 before:bg-[#00000099]' style={{backgroundImage: `url(${Background})`}}>
      <main className='flex flex-col items-center'>
        <section className='mx-[10vw] mt-[10vh] mb-[3vh] flex justify-center'>
            <img className='w-1/4 md:w-1/2 h-1/4 md:h-1/2' src="/tickitz.png" alt="Logo Tickitz" />
        </section>
        <Login />
      </main>
    </div>
  )
}

export default Auth
