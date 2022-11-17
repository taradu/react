import React from 'react';
import toUsd from '../helpers/converter';

function Rightside({onCloseCart, items = []}) {
    return (
        <div className='rightside'>
        <div className="overlay">
          <h2>Корзина <img onClick={onCloseCart} className="removeicon" src="/img/cartremove.svg" alt="close" /></h2>
          <div className="items">
            {items.map((obj) => (
              <div className="cartitem">
              <img width={70} height={70} src={obj.img} alt="sneakers" />
              <div className="textitem">
                <p>{obj.title}</p>
                <b>{toUsd.format(obj.price)}</b>
              </div>
              <img className="removeicon" src="/img/cartremove.svg" alt="remove" />
            </div>
            ))}
          
          </div>
          <div className="cartTotallist">
            <ul>
              <li className="cartlist">
                <span>Итого:</span>
                <div></div>
                <b>460$</b>
              </li>
              <li className="cartlist">
                <span>Налог 5%: </span>
                <div></div>
                <b>23$</b>
              </li>
            </ul>
            <button>Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
            
          </div>
        </div>
      </div>
    );
}
export default Rightside;