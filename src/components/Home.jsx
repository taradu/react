import React from "react";
function Home(props) {
  // const {items, searchValue, setSearchValue, onChangeSearchInput, Card, onAddToCart, onFavorite} = props;
  console.log(props);
    return (
        <div className="content">
          <div className="inputAll">
            <h1 className="allsneakers">{props.searchValue ? `Поиск по запросу: '${props.searchValue}'` : 'Все кроссовки'}</h1>
            <div className="search-block">
              <img src="/img/search.svg" alt="search" />
              {props.searchValue && <img onClick={() => props.setSearchValue('')} className="clear" src="/img/cartremove.svg" alt="clear" />}
              <input onChange={props.onChangeSearchInput} value={props.searchValue} placeholder={props.myProducts} />
            </div>
          </div>
        <div className="sneakers">
        {props.items
          .filter((item) => item.title.toLowerCase().includes(props.searchValue.toLowerCase())) 
          .map((item, index) => 
            <props.Card key={index}
              title={item.title} 
              price={item.price} 
              img={item.img} 
              onPlus={(obj) => props.onAddToCart(obj)}
              onFavorite={props.onFavorite} />
        )}

        </div>
         </div>
    )
}

export default Home;