import Card from './components/Card';
import Header from './components/Header';
import Rightside from './components/Rightside';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import axios from 'axios'; 
import Home from './components/Home';
import Favorites from './components/Favorites';



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [openCart, setOpenCart] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://6376217c7e93bcb006c3d844.mockapi.io/items')
    .then((res) => {
      setItems(res.data);
    }); 
    axios.get('https://6376217c7e93bcb006c3d844.mockapi.io/cartitems')
    .then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://6376217c7e93bcb006c3d844.mockapi.io/favorites')
    .then((res) => {
      setFavorites(res.data);
    });
  }, []);
  
  const onAddToCart = (obj) => {
    axios.post('https://6376217c7e93bcb006c3d844.mockapi.io/cartitems', obj);
    // setCartItems([...cartItems, obj]);
    setCartItems((prev) => [...prev, obj]);
  }
  const onAddFavorite = (obj) => {
    axios.post('https://6376217c7e93bcb006c3d844.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://6376217c7e93bcb006c3d844.mockapi.io/cartitems/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    
    <div className="wrapper">
      
        { openCart && <Rightside items={cartItems} onCloseCart={() => setOpenCart(false)} onRemove={onRemoveItem}/>}
        
        <Header onClickCart={() => setOpenCart(true)} />
        
        <Routes>
          <Route path="/" element={<Home items={items} searchValue={searchValue} cartItems={cartItems} openCart={openCart} onChangeSearchInput={onChangeSearchInput} Card={Card} onAddToCart={onAddToCart} onFavorite={onAddFavorite} />}/>
          <Route path="/favorites" element={<Favorites items={favorites}/>} />
        </Routes>
    </div>
  );
}

export default App;

