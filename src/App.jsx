import Card from './components/Card';
import Header from './components/Header';
import Rightside from './components/Rightside';

function App() {
  return (
    <div className="wrapper">
        <Rightside />
        <Header />
        <div className="content">
          <div className="inputAll">
            <h1 className="allsneakers">Все кроссовки</h1>
            <div className="search-block">
              <img src="/img/search.svg" alt="search" />
              <input placeholder="Поиск..." />
            </div>
          </div>
        <div className="sneakers">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
         </div>
    </div>
  );
}

export default App;
