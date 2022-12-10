import Card from './components/Card';
import Header from './components/Header';
import Rightside from './components/Rightside';
import React from 'react';
import axios from 'axios'; 


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
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
  }, []);
  
  const onAddToCart = (obj) => {
    axios.post('https://6376217c7e93bcb006c3d844.mockapi.io/cartitems', obj);
    // setCartItems([...cartItems, obj]);
    setCartItems((prev) => [...prev, obj]);
  }
  const onRemoveItem = (id) => {
    // axios.delete(`https://6376217c7e93bcb006c3d844.mockapi.io/cartitems/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <div className="wrapper">
        { openCart && <Rightside items={cartItems} onCloseCart={() => setOpenCart(false)} onRemove={onRemoveItem}/>}
        <Header onClickCart={() => setOpenCart(true)} />
        <div className="content">
          <div className="inputAll">
            <h1 className="allsneakers">{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
            <div className="search-block">
              <img src="/img/search.svg" alt="search" />
              {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="/img/cartremove.svg" alt="clear" />}
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
            </div>
          </div>
        <div className="sneakers">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())) 
          .map((item, index) => 
            <Card key={index}
              title={item.title} 
              price={item.price} 
              img={item.imageURL} 
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={() => console.log('Натиснули на Вибране')} />
        )}

        </div>
         </div>
    </div>
  );
}

export default App;
