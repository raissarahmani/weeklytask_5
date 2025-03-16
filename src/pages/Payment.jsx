import React from 'react'

import Steps from '../components/Steps'
import PaymentPage from './Payment/PaymentPage'
import Popup from './Payment/Popup'

function Payment() {
  return (
    <div className='relative bg-[#a0a3bd33] px-[10vw] py-[5vh]'>
      <Steps />
      <PaymentPage />
      <Popup />
    </div>
  )
}

export default Payment
