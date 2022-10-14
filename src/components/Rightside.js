function Rightside() {
    return (
        <div style={{display: 'none'}} class='rightside'>
        <div className="overlay">
          <h2>Корзина <img className="removeicon" src="/img/cartremove.svg" alt="remove" /></h2>
          <div className="items">
          <div className="cartitem">
            <img width={70} height={70} src="/img/sneakers2.jpg" alt="sneakers" />
            <div className="textitem">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>230$</b>
            </div>
            <img className="removeicon" src="/img/cartremove.svg" alt="remove" />
          </div>
          <div className="cartitem">
            <img width={70} height={70} src="/img/sneakers3.jpg" alt="sneakers" />
            <div className="textitem">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>230$</b>
            </div>
            <img className="removeicon" src="/img/cartremove.svg" alt="remove" />
          </div>
          
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