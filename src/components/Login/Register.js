import React from 'react'
import './main.css';
import Puppies from '../../assets/images/puppies.jpg'
import { Facebook, GitHub, Google } from '@mui/icons-material';

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
            <GitHub />
            GitHub
          </button>
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
          <input name='email' placeholder='email' />
          <input name="password" placeholder='password' autoComplete='off' />
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