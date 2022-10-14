function Header() {
    return (
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
    );
}
export default Header;