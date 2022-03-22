// src/App.js
import './App.css';
import foods from './foods.json';

function App() {
  return <div className="App">
    {foods.map((food) => {
      return (
        <div>
          <h3>{food.name}</h3>
          <img src={food.image} alt="food display" width={100}/>
        </div>
      )
      
    })}
  </div>;
}
export default App;