import React from 'react'
import Brand1 from '../../../assets/images/brand.webp'
import Brand2 from '../../../assets/images/brand2.webp'
import Brand3 from '../../../assets/images/brand3.webp'
import Brand4 from '../../../assets/images/brand4.webp'
import Brand5 from '../../../assets/images/brand5.webp'
import Brand6 from '../../../assets/images/brand6.webp'
import Brand7 from '../../../assets/images/brand7.webp'
import Brand8 from '../../../assets/images/brand8.webp'
import Brand9 from '../../../assets/images/brand9.webp'
import Brand10 from '../../../assets/images/brand10.webp'
import Brand11 from '../../../assets/images/brand11.webp'
import Brand12 from '../../../assets/images/brand12.webp'

const Category = () => {
  return (
    <div className='bg-gradient-to-tr from-[#fefedf] via-purple-200 to-slate-200'>
      <h1 className='text-4xl text-brown-700 font-bold text-center py-12'>
        Shop by Brand
      </h1>

      <div className='flex flex-row justify-around gap-2 card-shop-pet w-full flex-wrap items-center pb-4'>
        <img
        src={
          Brand1
        } />
        <img
        src={
          Brand2
        } />
        <img
        src={
          Brand3
        } />
        <img
        src={
          Brand4
        } />
        <img
        src={
          Brand5
        } />
        <img
        src={
          Brand6
        } />
        <img
        src={
          Brand7
        } />
        <img
        src={
          Brand8
        } />
        <img
        src={
          Brand9
        } />
        <img
        src={
          Brand10
        } />
        <img
        src={
          Brand11
        } />
        <img
        src={
          Brand12
        } />
      </div>
    </div>
  )
}

export default Category