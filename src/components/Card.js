
import toUsd from './../helpers/converter';


function Card(obj) {
    return (
        <div className="card">
          <div className="favorite">
            <img className="favorite-img" src="/img/favorite-unliked.svg" alt="unliked" />
          </div>
          <img width={133} height={112} src={obj.img} alt="item" />
          <h5>{obj.title}</h5>
          <div className="cardButton">
            <div className="buttonInfo">
              <span>ЦЕНА:</span>
              <b>{toUsd.format(obj.price)}</b>
            </div>
            <button className="button">
              <img width={13} height={13} src="/img/Group 91.svg" alt="plus" />
            </button>
          </div>
        </div>
    );
}
export default Card;