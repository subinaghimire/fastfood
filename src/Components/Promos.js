import React from "react";
// import Carousel from "react-elastic-carousel";
import Carousel from '@itseasy21/react-elastic-carousel';



const cardsData = [
    {
      image: 'pizzas/margherita.jpg',
      title: 'Our Meal',
      description: 'It’s only natural that your Chefgood meals are small batch handcrafted using quality ingredients by renowned chefs',
    },
    ]

export default function Promos() {
  return (
    <div>
        
    
    <main className="promos">

    

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
