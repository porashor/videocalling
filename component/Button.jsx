import React from 'react'

const Button = ({children, className, onClick}) =>{
  return (
    <button onClick={(e) => onClick(e)} className={`${className} py-2 bg-[#3B3D3E] text-white font-bold rounded-xl hover:bg-[#494949] transition-all duration-100 mt-3 w-full`}>{children}</button>
  )
}

export default Button
