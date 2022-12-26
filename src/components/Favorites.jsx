import React from "react";
import Card from '../components/Card';
function Favorites(props) {
    return (
        <div className="content">
          <div className="inputAll">
            <h1>Мои закладки</h1>
          </div>
          <div>{props.items
          .map((item, index) => 
            <Card key={index}
              title={item.title} 
              price={item.price} 
              img={item.img} />
        )}
          </div>
        </div>
      
      
    )
}

export default Favorites;