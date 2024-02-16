import React from 'react'
import Food1 from '../../../assets/images/food1.jpg'
import { Button, Typography } from '@mui/material'

const CartContent = () => {
  return (
    <div className='card-content'>
        <div className='no-product'>

        </div>

        <div className='products'>
            <div className='row'>
                <div className='card bg-gradient-to-tr from-orange-300 via-yellow-400 to-amber-600'>
                    <img src={Food1}
                    alt='product1'
                    className='card-image rounded-lg hover:shadow-md hover:shadow-amber-600 mb-2'
                    />
                    <h1 className='title text-3xl font-bold font-["Poppins", sans-serif]'>
                        Pedigree Dog Food
                    </h1>
                    <h3 className='font-extralight text-gray-700 text-sm mt-1'>
                        Expected to be delivered on Monday 31, about 11:30PM
                    </h3>
                    <main>
                        <button className='border border-amber-500 hover:shadow-emerald-200 hover:shadow-md bg-gradient-to-tr from-green-400 via-emerald-400 to-fuchsia-200 px-3 py-2 rounded-lg text-white text-xl font-bold hover:text-red-400'>
                            View Product
                        </button>
                    </main>
                </div>


            </div> 

            <div className="row-flex-center" style={{
                marginTop: "2rem"
            }}>
            <Button color='secondary' >
                            View Products
                        </Button>
            </div>
            
        </div>
    </div>
  )
}

export default CartContent