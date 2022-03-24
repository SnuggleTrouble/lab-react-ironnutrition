// src/App.js
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import { FoodBox } from './components/FoodBox/FoodBox';
import { AddFoodForm } from './components/AddFoodForm/AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const addNewFood = (newFoodItem) => {
    const amendedFoodList = [...foodList, newFoodItem];
    setFoodList(amendedFoodList);
  };
  return (
    <div className="App">
      {/* The Add Food Component */}
      <AddFoodForm addFood={addNewFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* The Search Component */}

      <Divider> Food List </Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* List of Food Box components */}
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
