
import toUsd from '../../helpers/converter';
import styles from './Card.module.scss';

console.log(styles);
function Card(obj) {
    return (
        <div className={styles.card}>
          <div className={styles.favorite}>
            <img className="favorite-img" src="/img/favorite-unliked.svg" alt="unliked" />
          </div>
          <img width={133} height={112} src={obj.img} alt="item" />
          <h5>{obj.title}</h5>
          <div className={styles.cardButton}>
            <div className={styles.buttonInfo}>
              <span>ЦЕНА:</span>
              <b>{toUsd.format(obj.price)}</b>
            </div>
            <button className="button" onClick={() => alert(obj.onClick)}>
              <img width={13} height={13} src="/img/Group 91.svg" alt="plus" />
            </button>
          </div>
        </div>
    );
}
export default Card;