import Card from './components/Card';
import Header from './components/Header';
import Rightside from './components/Rightside';
import React from 'react';


let arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 240,
    img: './img/sneakers1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 350,
    img: './img/sneakers2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 160,
    img: './img/sneakers3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 220,
    img: './img/sneakers4.jpg',
  },
]
function App() {
  const [openCart, setOpenCart] = React.useState(false);

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
        {arr.map((obj) => 
        <Card title={obj.title} 
              price={obj.price} 
              img={obj.img} 
              onPlus={() => console.log('Натиснули на плюс')}
              onFavorite={() => console.log('Натиснули на Вибране')} />
        )}

        </div>
         </div>
    </div>
  );
}

export default App;
