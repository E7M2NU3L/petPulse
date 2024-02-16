import React from 'react'
import './main.css';
import Food2 from '../../../assets/images/carousel_offer.webp';

const HeroSection = () => {
  return (

    <div className='hero-complete bg-gradient-to-tr from-[#fefedf] to-[#BFBAB0]'>
    <div className='hero-section flex justify-around items-center'>
      <div className='hero-content'>
        <h1 className='title text-4xl font-bold mt-8'>
          Welcome to <span className='text-orange-500'>PetPulse</span>: Your Premier Destination for Pet Happiness
        </h1>
        <h3 className='sub-heading text-2xl font-semibold'>
          Where Tail Wags and Purrs Meet Expert Care
        </h3>
        <p className='description text-light'>
        At PetPulse, we believe that every wag, purr, chirp, and cuddle is a testament to the joy our pets bring into our lives. As your premier destination for pet happiness, we're dedicated to providing top-quality products, expert advice, and unparalleled customer service to ensure your furry companions lead healthy, happy lives.
        </p>
        <p className='cta text-0.5xl font-extralight'>
        Discover the Difference at PetPulse – Shop Now for Tail-Wagging Deals!
        </p>
        <button className='explore text-xl border border-orange-200 px-8 py-2 shadow-lg hover:shadow-lg hover:shadow-orange-500'>
          Explore
        </button>
      </div>
    
    {/* 
    <div className='image-holder-hero'>
    <div className='hero-images'>
            <img
              src={Food}
              alt='food'
              className='image-hero'
            />
            <div className='cat'>
              <img src={Cats}  className='other-img-1'/>
          </div>
      </div>
        
        <div className='other-img-hold'>
          <div>
              <img src={Cats}  className='other-img-1'/>
          </div>
          
          <div>
              <img src={Dogs}  className='other-img-2'/>
          </div>

          <div>
              <img src={Food2} className='other-img-3' />
          </div>
        </div>
    </div>

    */}

    <div className='image-holder' style={{
      paddingBottom: "1rem"
    }}>
      <img src={Food2} className="shadow-lg shadow-slate-300 hover:shadow-purple-300 img" />
    </div>
    </div>
    <div className='hero-footer bg-gradient-to-tr from-orange-400 via-amber-500 to-yellow-500' style={{
      padding: "10px 0"
    }}>
      <h1 className='foot text-center text-[#fefedf] font-bold text-xl'>
      Tail-Wagging Deals Await! <span>
      Limited Time Only: Fetch These <span className='paw text-green-800 font-bold'>Paw-some</span> Savings
      </span>
      </h1>
    </div>
    </div>   
)}

export default HeroSection