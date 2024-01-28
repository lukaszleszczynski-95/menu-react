import { useState } from 'react'
import './App.css'
import Item from './Item'
import data from './data'
import Button from './Button'

function App() {

  

const [menu, setMenu] = useState(data);

const allCategories = ['all', ...new Set(menu.map((item) => {
  return item.category
}))]
const [categories, setCategories] = useState(allCategories);



const handleFilter = category => {
 if(category === 'all') {
  setMenu(data);
  return;
 }
 const newItems = data.filter((item) => item.category === category);
 setMenu(newItems);

}


  return (
    <div className='app'>
      <h1 className="main-title">Our Menu</h1>
      <div className="menu-underline"></div>
      <div className="button-container">
        {categories.map((category, index) => {
          return <Button key={index} category={category} handleFilter={handleFilter}/>
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
