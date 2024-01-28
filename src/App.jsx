import { useState } from 'react'
import './App.css'
import Item from './components/Item'
import data from './data'
import ButtonContainer from './components/ButtonContainer'
import Title from './components/Title'
import ItemsContainer from './components/ItemsContainer'

function App() {

// Using the 'useState' hook to manage the 'menu' state with initial data from 'data'
const [menu, setMenu] = useState(data);

// Creating an array of unique categories using the Set object
const allCategories = ['all', ...new Set(menu.map((item) => {
  return item.category
}))];

// Using 'useState' hook to manage the 'categories' state with initial value 'allCategories'
const [categories, setCategories] = useState(allCategories);


// Handling filter based on selected categorys
const handleFilter = category => {
 if(category === 'all') {
  // If 'all' is selected, set 'menu' to the original data
  setMenu(data);
  return;
 } else {
  // Filter items based on the selected category
  const newItems = data.filter((item) => item.category === category);
  setMenu(newItems);
 }

 

}


  return (
    <div className='app'>
      <Title />
      <ButtonContainer
        categories={categories}
        handleFilter={handleFilter}
      />
      <ItemsContainer 
        menu={menu}
      />
     
    </div>
  )
}

export default App
