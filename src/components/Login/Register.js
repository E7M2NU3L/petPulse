import React, { useState } from 'react'
import './main.css';
import Puppies from '../../assets/images/puppies.jpg'
import { Email, Facebook, Google, Logout, Password } from '@mui/icons-material';
import { GoogleProvider, auth } from '../../config/firebase_config';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,  signInWithPopup, signOut} from 'firebase/auth';
import { Link, redirect } from 'react-router-dom';



const Register = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loggedin, isLoggedin] = useState(false);

  const login = async() => {
    try{
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      isLoggedin(true);
      return redirect('/');
    }
    catch(err){
      console.error(err);
    }
  }

  const gSignin = async() => {
    try{
      await signInWithPopup(
        auth,
        GoogleProvider
      );
      
      isLoggedin(true);
      return redirect('/');
    }
    catch(err){
      console.error(err);
    }
  }

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
          Sign in
        </h1>

        <section className='btn'>
          <button>
            <Facebook />
            Facebook
          </button>
          <button onClick={gSignin}>
            <Google />
            Google
          </button>
        </section>

        <form>

          
          <div className="relative">
            <input
              type="email"
              className="pl-10 pr-4 py-2 border text-[#fefedf] rounded-md w-full focus:outline-none focus:border-blue-500"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Email className="absolute top-3 left-3 text-gray-500" />
          </div>
        
          <div className="relative">
            <input
              type="password"
              className="pl-10 pr-4 py-2 text-[#fefedf] border rounded-md w-full focus:outline-none focus:border-blue-500"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Password className="absolute top-3 left-3 text-gray-500" />
          </div>



          <button type="submit" onClick={login} className='submit-btn'>Submit</button>
        
        </form>

      <div className='flex text-md pt-3 flex-col text-[#fefedf] gap-2 justify-around items-center'>
      <p>
        Already have an Account? <Link to="/login">sign in</Link>
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