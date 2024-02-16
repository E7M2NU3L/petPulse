import React from 'react'
import './footer.css';
import GooglePlay from '../assets/images/play_store.avif';
import Apple from '../assets/images/apple_store.avif';
import { Facebook, Instagram, LinkedIn, Mail, Phone, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='footer-section flex justify-center'>
      <div className='online-shop flex-1'>
        <h1 className='title text-3xl font-bold text-[#fefedf]'>
          Online Shopping
        </h1>
        <ul className='text-md mt-3 text-[#BFBAB0] font-light'>
          <li>
            <a href='#'>Dogs</a>
          </li>
          
          <li>
            <a href='#'>Cats</a>
          </li>
          
          <li>
            <a href='#'>Small Pets</a>
          </li>
          
          <li>
            <a href='#'>Consult Doctor</a>
          </li>
          
          <li>
            <a href='#'>Pharmacy</a>
          </li>
        </ul>
      </div>

      <div className='go-thru flex-1'>
        <h1 className='text-3xl font-bold text-[#fefedf]'>
          Explore
        </h1>
        <ul className='text-md text-[#BFBAB0] font-light font-["Poppins", sans-serif] mt-3'>
          <li>
            <a href='#'>
              About us
            </a>
          </li>
          <li>
            <a href='#'>
              FAQs
            </a>
          </li>
          <li>
            <a href='#'>
              Blogs
            </a>
          </li>
          <li>
            <a href='#'>
              Contact us
            </a>
          </li>
        </ul>
      </div>

      <div className='quick-links flex-1'>
        <h1 className='text-3xl text-[#fefedf] font-bold'>
          Quick Links
        </h1>
        <ul className='mt-3 text-[#BFBAB0]'>
          <li>
            <a href='#'>
              My Account
            </a>
          </li>
          <li>
            <a href='#'>
            Track Your Order
            </a>
          </li>
          <li>
            <a href='#'>
              Refund Policy
            </a>
          </li>
          <li>
            <a href='#'>
              Return Policy
            </a>
          </li>
          <li>
            <a href='#'>
              Terms of use
            </a>
          </li>  
        </ul>  
      </div>

      <div className='play-links flex flex-col justify-around items-center gap-2'>
        <main>
          <h1 className='text-2xl text-[#fefedf] font-bold'>
            Download the Mobile app for <span className='text-green-400 ml-1'>
              Better 
            </span> Experience
          </h1>
          <div className='mt-2 flex flex-col justify-center gap-2 img-tab'>
            <img src={GooglePlay} alt='google play' />
            <img src={Apple} alt="apple store" />
          </div>
        </main>

        <main className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-2xl font-semibold text-[#fefedf]'>
            Follow us
          </h1>

          <div className='flex flex-row gap-3'>
            <Instagram />
            <Facebook />
            <YouTube />
            <Twitter />
            <Instagram />
          </div>
        </main>

        <main className='mt-3'>
          <h1 className='text-2xl font-semibold text-[#fefedf]'>
            Get in Touch
          </h1>
          
          <div className='flex mt-2 ites-center gap-2'>
            <Phone />
            <h4><a>099 9263748201</a></h4>
          </div>

          <div className='flex items-center gap-2'>
            <Mail />
            <h4><a>xyz@gmail.com</a></h4>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Footer