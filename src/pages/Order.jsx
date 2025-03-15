import React from 'react'
import Steps from '../components/Steps'
import Seats from './Order/Seats'
import Total from './Order/Total'

function Order() {
  return (
    <div className='bg-[#a0a3bd33] px-[10vw] py-[5vh]'>
      <Steps />
      <div className='flex flex-row'>
        <Seats />
        <Total />
      </div>
    </div>
  )
}

export default Order
