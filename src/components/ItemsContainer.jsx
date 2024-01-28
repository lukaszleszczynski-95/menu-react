import React from 'react'
import Item from './Item'

const ItemsContainer = ({ menu }) => {
  return (
    <div className="items-container">
        {menu.map((item) => { 
          return <Item key={item.id} item={item}/>
        })} 
    </div>
  )
}

export default ItemsContainer