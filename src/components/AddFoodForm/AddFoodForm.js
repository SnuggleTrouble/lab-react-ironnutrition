import { Divider, Input } from 'antd';
import React from 'react';
import { useState } from 'react';

export function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setimage] = useState('');
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setimage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newFoodItem = { name, image, calories, servings };
    props.addNewFood(newFoodItem);
    setName('');
    setimage('');
    setCalories(1);
    setServings(1);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input
          value={name}
          type="text"
          name="name"
          placeholder="Food Name"
          onChange={handleNameInput}
        ></Input>

        <label>Image</label>
        <Input
          value={image}
          type="text"
          name="image"
          placeholder="https://example-images.com/food-item.jpg"
          onChange={handleImageInput}
        ></Input>

        <label>Calories</label>
        <Input
          value={calories}
          type="number"
          name="calories"
          onChange={handleCaloriesInput}
        ></Input>

        <label>Servings</label>
        <Input
          value={servings}
          type="number"
          name="servings"
          onChange={handleServingsInput}
        ></Input>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
