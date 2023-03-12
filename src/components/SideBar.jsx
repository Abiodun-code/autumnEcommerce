import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import {SidebarContext} from '../contexts/SidebarContext'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const { setIsOpen, isOpen } = useContext(SidebarContext)
  const { total, cart, clearCart, itemAmount } = useContext(CartContext)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} 
    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='justify-between flex items-center py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping cart ({itemAmount})</div>
        <div onClick={()=>setIsOpen(false)} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className={`text-2xl`} />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[500px] lg:h-[500px] overflow-x-hidden border-b overflow-y-auto'>
        {cart.map(item=>{
        return <CartItem item={item} key={item.id}/>
        })}
      </div>
      <div className='block py-4 mt-2'>
        <div className='items-center flex justify-between w-full'>
          <div className='uppercase font-semibold'>
            <span>Total: </span>${total}
          </div>
          <div onClick={() => clearCart()} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'><FiTrash2/></div>
        </div>
        <div className='w-full h-full pt-2'>
          <Link className='flex bg-gray-200 items-center justify-center py-2 text-primary font-semibold' to={'/'}>View Cart</Link>
          <Link className='flex bg-primary items-center justify-center mt-2 py-2 text-white font-semibold' to={'/'}>Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar