
import React from "react";
// import { ReactDOM } from "react-dom";

import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";





export default function Menus(){
    

    return(
      <main>
      <Header />
   <div className="Menus">

    <h2>Our Menus</h2>

    <div className="Menus"  >
      <ul className="mlist">
      <li><Link to="/piza"><h2>Pizzas</h2></Link></li>
    
    <li><Link to="/burger"><h2>Burgers</h2></Link></li>
    <li><Link to="/careers"><h2>Drinks</h2></Link></li>
   
      </ul>
      </div>
   
   <div className="w-3/4 m-auto ">
    <div className="mt-20">
    
        <div>
        
    
    <main className="aboutus">

    <h2>BREKKIE MENU </h2>


    <section>
     
        <img
          src="meal.jpg"
          alt=" sunset"
        />
       
        <div>
          
          <p>
          Satisfry your cravings and try our NEW Jack's Fried Chicken
          range, which is 40% bigger than other fried chicken burgers,
          with a Big, Thick, Crunchy, Juicy whole muscle chicken
          breast that delivers an epic eating experience with every 
          bite.
          </p>
          
        </div>
      </section>

    <h2>BRUNCH MENU</h2>


    <section>
       
        <div>
         
          <p>
          Satisfry your cravings and try our NEW Jack's Fried Chicken
          range, which is 40% bigger than other fried chicken burgers,
          with a Big, Thick, Crunchy, Juicy whole muscle chicken
          breast that delivers an epic eating experience with every 
          bite.
          </p>
          
        </div>
        <img
          src="pizzas/funghi.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        
      </section>
      <h2>LUNCH MENU </h2>


    <section>
     
        <img
          src="meal.jpg"
          alt=" sunset"
        />
       
        <div>
          
          <p>
          Satisfry your cravings and try our NEW Jack's Fried Chicken
          range, which is 40% bigger than other fried chicken burgers,
          with a Big, Thick, Crunchy, Juicy whole muscle chicken
          breast that delivers an epic eating experience with every 
          bite.
          </p>
          
        </div>
      </section>


      <h2>DINNER MENU </h2>
      <section>

      
       
        <div>
         
          <p>
          Satisfry your cravings and try our NEW Jack's Fried Chicken
          range, which is 40% bigger than other fried chicken burgers,
          with a Big, Thick, Crunchy, Juicy whole muscle chicken
          breast that delivers an epic eating experience with every 
          bite.
          </p>
          
        </div>
        <img
          src="pizzas/salamino.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        
      </section>
        
      
     

    </main>
    
    </div>
    </div>

   </div>
   </div>
   <Footer />
   </main>
    );
} 