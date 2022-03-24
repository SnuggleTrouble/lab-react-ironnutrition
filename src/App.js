// src/App.js
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import { FoodBox } from './components/FoodBox/FoodBox';
import { AddFoodForm } from './components/AddFoodForm/AddFoodForm';
import { Search } from './components/Search/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchList, setSearchList] = useState(foods);

  const addNewFood = (newFoodItem) => {
    const amendedFoodList = [...foodList, newFoodItem];
    setFoodList(amendedFoodList);
    setSearchList(amendedFoodList);
  };

  const searchFood = (search) => {
    const filteredFoodList = searchList.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchList(filteredFoodList);
  };

  const deleteFood = (foodItem) => {
    const filteredFoodList = foodList.filter((food) => {
      return food.name !== foodItem;
    });
    setFoodList(filteredFoodList);
    setSearchList(filteredFoodList);
  };

  return (
    <div className="App">
      {/* The Add Food Component */}
      <AddFoodForm addNewFood={addNewFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* The Search Component */}
      <Search search={searchFood} />

      <Divider> Food List </Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* List of Food Box components */}
        {searchList.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
              deleteFood={deleteFood}
            />
          );
        })}
      </Row>
    </div>
  );
}
export default App;
