import React from 'react'
import Button from './Button'
const ButtonContainer = ({ category, categories, handleFilter}) => {
  return (
    
    <div className="button-container">
        {categories.map((category, index) => {
          return <Button key={index} category={category} handleFilter={handleFilter}/>
        })}
      </div>
    
  )
}

export default ButtonContainer