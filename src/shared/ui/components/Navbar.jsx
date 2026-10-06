import React from 'react'
import {NavLink} from "react-router"
import {Box, ShoppingCart} from "lucide-react"

const Navbar = () => {
  return (
    <div className=' bg-yellow-600 flex items-center gap-5 justify-between py-4 px-10'>
      <h1>Logo</h1>
      <div className='flex items-center gap-10 text-xl'>
        <NavLink className={({isActive})=>isActive?"text-white font-semibold":"text-gray-200"} end to={"/main"}>Home</NavLink>
        <NavLink className={({isActive})=>isActive?"text-white font-semibold":"text-gray-200"} to={"/main/product"}>Shop</NavLink>
        <NavLink className={({isActive})=>isActive?"text-white font-semibold":"text-gray-200"} to={"/main/about"}>About</NavLink>
      </div>
      <div className='flex items-center gap-6'>
        <NavLink className={({isActive})=>isActive?"text-white font-semibold":"text-gray-200"} to={"/main/cart"}>
          <ShoppingCart />
          </NavLink>
        <NavLink className={({isActive})=>isActive?"text-white font-semibold":"text-gray-200"} to={"/main/orders"}>
          <Box />
          </NavLink>
        
        
      <button className='rounded cursor-pointer px-5 py-2 text-white bg-red-700' >Logout</button>
      </div>
    </div>
  )
}

export default Navbar