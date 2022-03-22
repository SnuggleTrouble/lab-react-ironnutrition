// src/App.js
import './App.css';
import foods from './foods.json';
import { FoodBox } from './components/FoodBox/FoodBox';

function App() {
  return <div className="App">
    {foods.map((food) => {
      return (
        <div>
          <p>{food.name}</p>
          <img src={food.image} alt="food" width={0}/>
        </div>
      )
    })}
    <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
  </div>;
}
export default App;