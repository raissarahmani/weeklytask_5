import React from 'react'
import Steps from './Order/Steps'
import Seats from './Order/Seats'

function Order() {
  return (
    <div className='bg-[#a0a3bd33] px-[10vw] py-[5vh]'>
      <Steps />
      <div className='flex flex-row'>
        <Seats />
      </div>
    </div>
  )
}

export default Order
