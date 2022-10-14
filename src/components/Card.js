function Card() {
    return (
        <div className="card">
          <div className="favorite">
            <img className="favorite-img" src="/img/favorite-unliked.svg" alt="unliked" />
          </div>
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
    );
}
export default Card;