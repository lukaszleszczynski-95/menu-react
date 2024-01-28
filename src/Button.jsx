import React from 'react'

const Button = ({ button, handleFilter }) => {
  return (
    <>
        <button 
          onClick={() => handleFilter(button)}
        >{button}</button>
    </>
    
  )
}

export default Button