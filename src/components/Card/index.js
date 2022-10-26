
import toUsd from '../../helpers/converter';
import styles from './Card.module.scss';

console.log(styles);
function Card(props) {
    return (
        <div className={styles.card}>
          <div className={styles.favorite} onClick={props.onFavorite}>
            <img className="favorite-img" src="/img/favorite-unliked.svg" alt="unliked" />
          </div>
          <img width={133} height={112} src={props.img} alt="item" />
          <h5>{props.title}</h5>
          <div className={styles.cardButton}>
            <div className={styles.buttonInfo}>
              <span>ЦЕНА:</span>
              <b>{toUsd.format(props.price)}</b>
            </div>
            <button className="button" onClick={props.onPlus}>
              <img width={13} height={13} src="/img/Group 91.svg" alt="plus" />
            </button>
          </div>
        </div>
    );
}
export default Card;