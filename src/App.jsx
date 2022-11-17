import Card from './components/Card';
import Header from './components/Header';
import Rightside from './components/Rightside';
import React from 'react';


function App() {
  const [items, setItems] = React.useState([])
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
  

  return (
    <div className="wrapper">
        { openCart ? <Rightside onCloseCart={() => setOpenCart(false)}/> : null}
        <Header onClickCart={() => setOpenCart(true)} />
        <div className="content">
          <div className="inputAll">
            <h1 className="allsneakers">Все кроссовки</h1>
            <div className="search-block">
              <img src="/img/search.svg" alt="search" />
              <input placeholder="Поиск..." />
            </div>
          </div>
        <div className="sneakers">
        {items.map((obj) => 
        <Card title={obj.title} 
              price={obj.price} 
              img={obj.imageURL} 
              onPlus={() => console.log('Натиснули на плюс')}
              onFavorite={() => console.log('Натиснули на Вибране')} />
        )}

        </div>
         </div>
    </div>
  );
}

export default App;
