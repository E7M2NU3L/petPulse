import React from 'react'
import './main.css';
import Search from '../../../assets/svg/bx-search-alt.svg';
import { Link } from 'react-router-dom';
import Truck from '../../../assets/svg/bxs-truck.svg';

const SearchBar = () => {
  return (
    <div className='side-bar-section flex justify-between items-center'>
        <main className='side-section hover:shadow-sm hover:shadow-emerald-50 ml-3'>
            <a href='/' className='flex gap-1 '>
                <img
                src={Truck}
                alt='delivery'
                className=''
                />
                <h2 className='text-[#fefedf] font-["Poppins", sans-serif] font-semibold'>
                    Track Now
                </h2>
            </a>
        </main>

        <main className='links flex'>
            <ul className='flex gap-3'>
                <li className=''>
                    <Link to="/#offer">OfferZone</Link>
                </li>
                <li>
                    <Link to="/#dogs">Dogs</Link>
                </li>
                <li>
                    <Link to="/#cats">Cats</Link>
                </li>
                <li>
                    <Link to="/#pharmacy">Pharmacy</Link>
                </li>
            </ul>
        </main>

        <main className='search-bar mr-3'>
            <form className='flex items-center gap-1'>
                <button type='submit'><img src={Search} alt='search' /></button>
                <input type='search' placeholder='Search Products' name='product' />
            </form>
        </main>
    </div>
  )
}

export default SearchBar