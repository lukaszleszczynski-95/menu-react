import React from 'react'

const Button = ({ category, handleFilter }) => {
  return (
    <>
        <button 
          onClick={() => handleFilter(category)}
        >{category}</button>
    </>
    
  )
}

export default Button