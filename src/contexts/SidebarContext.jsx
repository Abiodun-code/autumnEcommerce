import React, {useState, createContext} from 'react'

export const SidebarContext = createContext()

const SidebarProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick  = () =>{
    setIsOpen(false)
  }

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClick}}>{children}</SidebarContext.Provider>
  )
}

export default SidebarProvider