import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Gralic Prawn",
    ingredients: "Tomato, mozarella, chilies, Garlic Prawn",
    price: 20,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function Menu() {
  return (
    <div>
    <Header />
    <main className="menu">
      <h2>Pizzas</h2>

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
          <section>
  
  {/* <div> 
    <h2> photo to be edit </h2> 
    <p>You can edit this image.
    </p>
    <img src="pizzas/prosciutto.jpg" alt="image"
  />
  </div> */}
 </section>


    </main>
    <Footer/>
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
