import React from 'react';
import toUsd from '../../helpers/converter';
import styles from './Card.module.scss';

console.log(styles);
function Card(props) {
  const [imgChange, setImg] = React.useState(false);
  const [likeImg, setLikeImg] = React.useState(false);
  const hundleImg = () => {
    const newCartItem = {
      title: props.title,
      price: props.price,
      img: props.img
    }
    props.onPlus(newCartItem);
    setImg(!imgChange);
  }

  const wishListHandler = () => {
    
    const addedToWishList = {
      title: props.title,
    }
    props.onFavorite(props.title, props.price, props.img)
    setLikeImg(!likeImg)
  }

    return (
        <div className={styles.card}>
          <div className={styles.favorite} onClick={wishListHandler}>
            <img className="favorite-img" src={likeImg ? "/img/favorite-liked.svg" : "/img/favorite-unliked.svg"} alt="unliked" />
          </div>
          <img width={133} height={112} src={props.img} alt="item" />
          <h5>{props.title}</h5>
          <div className={styles.cardButton}>
            <div className={styles.buttonInfo}>
              <span>ЦЕНА:</span>
              <b>{toUsd.format(props.price)}</b>
            </div>
            <button className="button" onClick={hundleImg}>
              <img  src={imgChange ? "/img/BtnChecked.svg" : "/img/BtnPlus.svg" } alt="plus" />
            </button>
          </div>
        </div>
    );
}
export default Card;