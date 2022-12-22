import React from "react";
function Home(props) {
  const {items, searchValue, setSearchValue, onChangeSearchInput, Card, onAddToCart} = props;
    return (
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
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())) 
          .map((item, index) => 
            <Card key={index}
              title={item.title} 
              price={item.price} 
              img={item.img} 
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={() => console.log('Натиснули на Вибране')} />
        )}

        </div>
         </div>
    )
}

export default Home;