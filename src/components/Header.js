import { Link } from "react-router-dom";
import toUsd from "../helpers/converter";

function Header(props) {
    return (
        <header className="itsheader">
        <div className="headerLeft">
        <Link to='/' className="linkLogo">
          <img src="/img/imagelogo.png" alt="logo" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </Link>
        </div>
          
        <ul  className="headerRight" >
            <li>
              <img width={18} height={18} src="/img/cart.svg" alt="cart" />
              <span onClick={props.onClickCart} className="cost">{toUsd.format(11)}</span>
            </li>
            <li>
              <Link to='/Favorites'>
              <img width={18} height={18} src="/img/heart.svg" alt="heart-icon" />
              </Link>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="user-icon" />
            </li>
      </ul>
      
      </header>
    );
}
export default Header;