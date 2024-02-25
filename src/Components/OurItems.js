
import React from "react";
// import { ReactDOM } from "react-dom";
// import Carousel from "react-elastic-carousel";
import Carousel from '@itseasy21/react-elastic-carousel';
import {Link} from "react-router-dom";


const data = [
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


export default function OurItems(){
    

    return(
   <div className="Services">
    <h2>TRY OUR NEW MENUS </h2>

<div className="Menus"  >
  <ul className="mlist">
  <li><Link to="/piza"><h2>Pizzas</h2></Link></li>

<li><Link to="/burger"><h2>Burgers</h2></Link></li>
<li><Link to="/careers"><h2>Drinks</h2></Link></li>

  </ul>
  </div>
    {/* <h2 className="text-yellow-500">Our Services</h2> */}
   <div className="w-3/4 m-auto ">
    <div className="mt-20">
    <Carousel
    //  enableAutoPlay
    //       autoPlaySpeed={2000} // Adjust the speed in milliseconds (e.g., 2000 for 2 seconds)
    //       isRTL={false} // Set to true if you want the carousel to move from right to left
           itemsToShow={2} // Show only one item at a time
    //       showArrows={true} // Hide navigation arrows
    //       pagination={false} // Hide bottom dots
    //       disablePaginationOnKeydown // Disable arrow key navigation
    //       enableMouseSwipe={false} // Disable mouse swipe navigation
    //       isInfinite
    >
        {data.map((d)=> (
            <div className="bg-white h-[650px] text-black rounded-xl border border-red-600 rounded-lg p-4">
                
                <div className="h-56 rounded-t-xl bg-red-500 flex justify-center items-center ">
                    
                    <img src={d.photoName} alt="" className="h-45 w-45 "/>
                    
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mt-40">
                        <p className="text-xl font-bold"> {d.name}</p>
                        <p className="text-xl "> {d.ingredients}</p>
                        <p className="text-xl font-semibold"> {d.price}</p>
                        <button className="bg-orange-500 text-white text-lg px-10 py-1 rounded-xl "><Link to="/piza">See More </Link></button>
                        </div>
                        </div>
                        
        ))}
        </Carousel>
    </div>

   </div>
   </div>
    );
} 