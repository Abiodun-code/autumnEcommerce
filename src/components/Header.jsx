import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount, setItemAmount} = useContext(CartContext)
  const [isActive, setIsActive] = useState(false)
  
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      window.scrollY > 30 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-4'} fixed w-full z-10 transition-all`}>
      <div className=' w-10/12 mx-auto flex items-center justify-between h-auto'>
        <Link to={'/'}>
          <div>
            <img className=' w-[40px]' src={logo} alt="" />
          </div>
        </Link>
        <div className='cursor-pointer flex relative' onClick={() => setIsOpen(true)}>
          <BsBag className='text-2xl' />
          <div className=' bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
}

export default Header