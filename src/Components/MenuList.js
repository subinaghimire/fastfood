// MainComponent.js
import React from 'react';

function MenuList() {
  const cardsData = [
    {
      image: 'meal.jpg',
      title: 'Our Meal',
      description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
    },
    {
      image: 'meals.jpg',
      title: 'Title 2',
      description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
    },
    {
        image: 'pizza1.jpg',
        title: 'Title 1',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'pizza.jpg',
        title: 'Title 2',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'pizza2.jpg',
        title: 'Title 1',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'pizza3.jpg',
        title: 'Title 2',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'pizza4.jpg',
        title: 'Title 1',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'pizzas/Chicken.jpg',
        title: 'Title 2',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'pizzas/Pork.jpg',
        title: 'Title 1',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'burgers.jpg',
        title: 'Title 2',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'burgermeal.jpg',
        title: 'Title 1',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'pizzas/funghi.jpg',
        title: 'Title 2',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'burger.jpg',
        title: 'Title 1',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
      {
        image: 'pizzas/salamino.jpg',
        title: 'Title 2',
        description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
      },
    // Add more card data as needed
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className="card-list">
          <img src={card.image} alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuList;
