import React from 'react'
import './main.css';
import Puppies from '../../assets/images/puppies.jpg'
import { Email, Facebook, Google, Password } from '@mui/icons-material';

const Register = () => {
  return (
    <div className='h-screen flex items-center justify-center relative w-full' style={{
      backgroundImage: `url(${Puppies})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <main className='card-login'>
      <h1 className='text-3xl'>
          Login
        </h1>

        <section className='btn'>
          <button>
            <Facebook />
            Facebook
          </button>
          <button>
            <Google />
            Google
          </button>
        </section>

        <form>

          
          <div className="relative">
            <input
              type="email"
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
            <Email className="absolute top-3 left-3 text-gray-500" />
          </div>
        
          <div className="relative">
            <input
              type="email"
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
            <Password className="absolute top-3 left-3 text-gray-500" />
          </div>

          <button type="submit" className='submit-btn'>Submit</button>
        
        </form>

      <div className='flex text-md pt-3 flex-col text-[#fefedf] gap-2 justify-around items-center'>
      <p>
      Don't have an Account? Sign up
      </p>
      <p>
        Forgot Password?
      </p>
      </div>
    </main>
    </div>
  )
}

export default Register