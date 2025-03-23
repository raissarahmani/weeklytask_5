import React from 'react'

import Steps from './Payment/Steps'
import PaymentPage from './Payment/PaymentPage'

function Payment() {
  return (
    <div className='relative bg-[#a0a3bd33] px-[5vw] md:px-[10vw] py-[5vh]'>
      <Steps />
      <PaymentPage />
    </div>
  )
}

export default Payment
