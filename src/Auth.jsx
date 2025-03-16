import React from 'react'
import Login from './pages/Auth/Login'
import Background from './assets/avenger.png'

function Auth() {
  return (
    <div className='bg-[50%_40%] relative' style={{backgroundImage: `url(${Background})`}}>
      <main className='flex flex-col items-center'>
        <section className='mx-[10vw] mt-[10vh] mb-[3vh] flex justify-center'>
            <img className='w-1/2 h-1/2' src="../public/tickitz.png" alt="Logo Tickitz" />
        </section>
        <Login />
      </main>
    </div>
  )
}

export default Auth
