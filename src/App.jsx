import { useState } from 'react'
import './App.css'
import Item from './Item'
import data from './data'
import Button from './Button'

function App() {
const [menu, setMenu] = useState(data);


const categories = menu.map((item) => {
  return item.category
});

const buttonTypes = Array.from(new Set(categories))


  return (
    <div className='app'>
      <h1 className="main-title">Our Menu</h1>
      <div className="button-container">
      <button>All</button>
        {buttonTypes.map((button, index) => {
          return <Button key={index} button={button}/>
        })}
      </div>
      <div className="items-container">

        {menu.map((item) => { 
          return <Item key={item.id} item={item}/>
        })}
        
        
      </div>
     
    </div>
  )
}

export default App
