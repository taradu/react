import Card from './components/Card';
import Header from './components/Header';
import Rightside from './components/Rightside';
import React from 'react';


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [openCart, setOpenCart] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6376217c7e93bcb006c3d844.mockapi.io/items')
    .then(res => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);
  
  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <div className="wrapper">
        { openCart ? <Rightside items={cartItems} onCloseCart={() => setOpenCart(false)}/> : null}
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
        {items.map((item, title) => 
        <Card key={title}
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
