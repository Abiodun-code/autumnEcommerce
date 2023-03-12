import React, { createContext, useState, UseEffect, useEffect} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const addToCart = (product, id) =>{
    const newItem = {...product, amount: 1}

    const cartItem = cart.find(item=>{
      return item.id === id
    });
    if(cartItem){
      const newCart = [...cart].map(item=>{
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1};
        }else{
          return item
        }
      })
      setCart(newCart)
    }else{
      setCart([...cart, newItem])
    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = ()=>{
    setCart([])
  }

  const increaseAmount = (id)=>{
    const cartItem = cart.find(item=>item.id === id);
    addToCart(cartItem, id)
  }

  const decreaseAmount = (id)=>{
    const cartItem = cart.find(item=>{
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map(item=>{
        if (item.id === id) {
          return {...item, amount: cartItem.amount - 1}
        }else{
          return item
        }
      })
      setCart(newCart)
    }
      if (cartItem.amount < 2) {
        removeFromCart(id)
      }
  }


  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const total = cart.reduce((accumulator, current)=>{
      return accumulator + current.price * current.amount
    }, 0);
    setTotal(total)
  })

  useEffect(()=>{
    if (cart) {
      const amount = cart.reduce((accumulator, current)=>{
        return accumulator + current.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  return (
    <CartContext.Provider 
    value={{ 
    cart, 
    setCart, 
    itemAmount, 
    setItemAmount,
    total,
    setTotal,
    decreaseAmount, 
    addToCart, 
    removeFromCart, 
    clearCart, 
    increaseAmount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider