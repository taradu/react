import React from 'react';
import toUsd from '../../helpers/converter';
import styles from './Card.module.scss';

console.log(styles);
function Card({title, price, img, onPlus, onFavorite }) {
  const [imgChange, setImg] = React.useState(false);
  const hundleImg = () => {
    onPlus({title, price, img});
    setImg(!imgChange);
  }
  const [likeImg, setLikeImg] = React.useState(false);
  const hundleLike = () => {
    setLikeImg(!likeImg);
  }

    return (
        <div className={styles.card}>
          <div className={styles.favorite} onClick={onFavorite}>
            <img className="favorite-img" onClick={hundleLike} src={likeImg ? "/img/favorite-liked.svg" : "/img/favorite-unliked.svg"} alt="unliked" />
          </div>
          <img width={133} height={112} src={img} alt="item" />
          <h5>{title}</h5>
          <div className={styles.cardButton}>
            <div className={styles.buttonInfo}>
              <span>ЦЕНА:</span>
              <b>{toUsd.format(price)}</b>
            </div>
            <button className="button" onClick={hundleImg}>
              <img  src={imgChange ? "/img/BtnChecked.svg" : "/img/BtnPlus.svg" } alt="plus" />
            </button>
          </div>
        </div>
    );
}
export default Card;