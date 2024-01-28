import { useState } from 'react'
import './App.css'
import Item from './Item'
import data from './data'
import Button from './Button'

function App() {
const [menu, setMenu] = useState(data);
const [filter, setFilter] = useState('all');
const [filteredItems, setFilteredItems] = useState([]);

const categories = menu.map((item) => {
  return item.category
});

const buttonTypes = Array.from(new Set(categories));

const handleFilter = button => {
  setFilter(button)
  console.log(button);
  if(filter === 'all') {
    setFilteredItems(menu);
  } else {
    setFilteredItems(menu.filter((item) => item.category === button))
  }
}


  return (
    <div className='app'>
      <h1 className="main-title">Our Menu</h1>
      <div className="menu-underline"></div>
      <div className="button-container">
      <button onClick={() => handleFilter('all')}>All</button>
        {buttonTypes.map((button, index) => {
          return <Button key={index} button={button} handleFilter={handleFilter}/>
        })}
      </div>
      <div className="items-container">

        {filteredItems.map((item) => { 
          return <Item key={item.id} item={item}/>
        })}
        
        
      </div>
     
    </div>
  )
}

export default App
