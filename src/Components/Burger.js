
import React from "react";
import Header from "./Header";
import Footer from "./Footer";



const pizzaData = [
  {
    name: "Wagyu Burger",
    ingredients: "Cheese, Lettucce, Tomato, Pattis, Chipotle Mayo",
    price: 12,
    photoName: "pizzas/Beef.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Burger",
    ingredients: "Cheese, Lettucce, Tomato, Chicken, Chipotle Mayo",
    price: 10,
    photoName: "pizzas/Chicken.jpg",
    soldOut: false,
  },
  {
    name: "Pork Burger",
    ingredients: "Cheese, Lettucce, Tomato, Pork, Chipotle Mayo",
    price: 12,
    photoName: "pizzas/Pork.jpg",
    soldOut: false,
  },
  {
    name: "Chickpea Burger",
    ingredients: "Cheese, Lettucce, Tomato, Chickpea Pattis, Chipotle Mayo",
    price: 12,
    photoName: "pizzas/Barra.jpg",
    soldOut: false,
  },
  {
    name: "Double Ham Burger",
    ingredients: "Cheese, Lettucce, Tomato, 2Pattis, Chipotle Mayo",
    price: 15,
    photoName: "pizzas/Beef.jpg",
    soldOut: true,
  },
  {
    name: "Barra Burger",
    ingredients: "Cheese, Lettucce, Tomato, Barramundi, Chipotle Mayo",
    price: 18,
    photoName: "pizzas/Pork.jpg",
    soldOut: false,
  },
  {
    name: "Egg Burger",
    ingredients: "Cheese, Lettucce, Tomato, Egg, Chipotle Mayo",
    price: 10,
    photoName: "pizzas/Barra.jpg",
    soldOut: false,
  },
];

export default function Burger() {
  return (
   <div>
    <Header />
    <main className="menu">
      <h2>Burgers</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          photoName="pizzas/focaccia.jpg"
          price={6}
        />
        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozarella"
          photoName="pizzas/margherita.jpg"
          price={10}
        />
         */}
    </main>
    <Footer />
    </div>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
