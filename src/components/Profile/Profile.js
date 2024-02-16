import React from 'react'
import Profile1 from '../../assets/images/profile.jpg'
import { Button } from '@mui/material'

const Profile = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center w-full bg-gadient-to-tr from-slate-200 via-zinc-200 to-purple-200'>
      <main>
        <img src={Profile1} alt='user-img'  className='rounded-full border border-purple-400 hover:shadow-lg hover:shadow-violet-600 hover:ring-1' style={{
          width: "8rem"
        }}/>
      </main>

      <main className='text-center flex flex-col justify-center items-center pt-2'>
        <h1 className='text-3xl font-bold'>
          User Details
        </h1>  

        <div>
          <h2 className='text-2xl font-smibold text-black pt-2'>
            Name: <span className='font-semibold text-slate-600'>Katherine Disousa</span>
          </h2>
          <h2 className='text-md font-smibold text-black pt-2'>
            Address: <span className='font-semibold text-slate-600'>22/33, p.v street, New Sydney, Australia</span>
          </h2>

          <h2 className='text-xl font-smibold text-black pt-2'>
            Phone: <span className='font-semibold text-slate-600'>+144 9827634</span>
          </h2>
        </div>

        <Button color="secondary" sx={{
          marginTop: "1rem"
        }}>
          Add More Details
        </Button>
      </main>  
    </div>
  )
}

export default Profile