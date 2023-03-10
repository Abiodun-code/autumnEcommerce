import React from 'react'
import {BsPlus, BsEyeFill} from 'react-icons/bs'

const Product = ({product}) => {
  const {id, image, categories, title, price} = product
  return (
    <div>
      <div className='border'>1</div>
      <div>2</div>
    </div>
    // <div className='w-full h-[300px] bg-pink-200'>
    //   {product.title}
    // </div>
  )
}

export default Product