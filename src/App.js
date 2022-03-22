// src/App.js
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { FoodBox } from './components/FoodBox/FoodBox';

function App() {
  return (
    <div className="App">
    <Divider> Food List </Divider>
    <Row style={{justifyContent: "center", textAlign: "center", width: "100vw"}}>
      {foods.map((food) => {
        return (
          <FoodBox
            food={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings,
            }}
          />
        );
      })}
      </Row>
    </div>
  );
}
export default App;
