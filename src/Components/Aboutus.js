import React from "react";
// import Carousel from "react-elastic-carousel";
import Carousel from '@itseasy21/react-elastic-carousel';




export default function Menu() {
  return (
    <div>
        
    
    <main className="aboutus">

    

    <h2>BITE INTO BETTER 
      CHICKEN </h2>


    <section>
      <Carousel enableAutoPlay
          autoPlaySpeed={2000} // Adjust the speed in milliseconds (e.g., 2000 for 2 seconds)
          isRTL={false} // Set to true if you want the carousel to move from right to left
          itemsToShow={1} // Show only one item at a time
          showArrows={false} // Hide navigation arrows
          pagination={false} // Hide bottom dots
          disablePaginationOnKeydown // Disable arrow key navigation
          enableMouseSwipe={false} // Disable mouse swipe navigation
          isInfinite>
        <img
          src="meal.jpg"
          alt=" sunset"
        />
        <img
          src="meals.jpg"
          alt="person"
        />
        <img
          src="pizzas/burger.jpg"
          alt="person with dog overlooking mountain with sunset"
        />

        </Carousel>
        <div>
          <h2>TASTE THE DIFFERENCE.</h2>
          <p>
          Satisfry your cravings and try our NEW Jack's Fried Chicken
          range, which is 40% bigger than other fried chicken burgers,
          with a Big, Thick, Crunchy, Juicy whole muscle chicken
          breast that delivers an epic eating experience with every 
          bite.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
        
      
      {/* <div className="slider">

      {/* <img src="pizzas/burger.jpg" alt="burger pic" />
      <img src="pizzas/burger.jpg" alt="burger pic" />
      <img src="pizzas/burger.jpg" alt="burger pic" /> 
       */}
      {/* </div> */} 
      
     

    </main>
    
    </div>
  );
}
