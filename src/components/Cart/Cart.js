import React from 'react'
import CartContent from './utils/CartContent'
import CartNote from './utils/CartNote'
import SearchBar from './utils/SearchBar'
import Suggestion from './utils/Suggestion'

const Cart = () => {
  return (
    <div>
        <SearchBar />
        <CartContent />
        <Suggestion />
        <CartNote />
    </div>
  )
}

export default Cart