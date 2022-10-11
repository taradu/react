

function App() {
  return (
    <div className="wrapper">
      <header className="itsheader">
        <div className="headerLeft">
          <img src="/img/imagelogo.png" alt="logo" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
          
        <ul className="headerRight">
            <li>
              <img width={18} height={18} src="/img/cart.svg" alt="cart" />
              <span className="cost">140$</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/heart.svg" alt="heart-icon" />
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="user-icon" />
            </li>
      </ul>
      
      </header>
        <div className="content">
          <h1 className="allsneakers">Все кроссовки</h1>
        </div>
        <div className="sneakers">
        <div className="card">
          <img width={133} height={112} src="/img/sneakers1.jpg" alt="item" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="buttonInfo">
              <span>ЦЕНА:</span>
              <b>230$</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/Group 91.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers2.jpg" alt="item" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="buttonInfo">
              <span>ЦЕНА:</span>
              <b>230$</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/Group 91.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers3.jpg" alt="item" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="buttonInfo">
              <span>ЦЕНА:</span>
              <b>230$</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/Group 91.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers4.jpg" alt="item" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="buttonInfo">
              <span>ЦЕНА:</span>
              <b>230$</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/Group 91.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers5.jpg" alt="item" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="buttonInfo">
              <span>ЦЕНА:</span>
              <b>230$</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/Group 91.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers6.jpg" alt="item" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="buttonInfo">
              <span>ЦЕНА:</span>
              <b>230$</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/Group 91.svg" alt="plus" />
            </button>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
