import React from 'react'
import Pharma from '../../../assets/images/pharmacy_chat.webp'
import Pharma2 from '../../../assets/images/pharmacy.webp'

const Brand = () => {
  return (
    <div className='bg-gradient-to-tr from-slate-300 via-puple-300 to-violet-200'>
      <h1 className='text-4xl text-center font-bold text-orange-600 py-8'>
        Pet Nursing Support <span className='text-green-500 text-4xl'>24/7</span>
      </h1>

        <div>
          <img src={Pharma2} />
        </div>
    </div>
  )
}

export default Brand