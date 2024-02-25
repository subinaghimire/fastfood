// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Menu() {
//   // Sample image URLs for the carousel
//   const imageUrls = [
//     "pizzas/burger.jpg",
//     "pizzas/burger.jpg",
//     "pizzas/burger.jpg",
//     "pizzas/burger.jpg",
//     "pizzas/burger.jpg",
//     "pizzas/burger.jpg",
//   ];

//   // Slick carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div>
//       <main className="banner">
//         <h2>Try our New Menu</h2>
//         <div className="slider">
//           <Slider {...settings}>
//             {imageUrls.map((imageUrl, index) => (
//               <div key={index}>
//                 <img src={imageUrl} alt={` ${index + 1}`}  />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </main>
//     </div>
//   );
// }



// import React from "react";

// BackgroundSlider.js
import React, { useState, useEffect } from 'react';
// import './BackgroundSlider.css'; // Import your CSS file for styling

const images = ['pizza4.jpg','burgers.jpg', 'pizza.jpg',  'burgermeal.jpg']; // Define your image paths

function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
 <div className='img-slider'>
  
    <div className="background-slider">
      
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Background ${idx}`}
          className={idx === index ? 'active' : ''}
        />
      ))}
    </div>
    
 </div>
  );
}

export default ImageSlider;

















// import { ReactDOM } from "react-dom";
// import Carousel from "react-elastic-carousel";




// export default function Menu() {
//   return (
//     <div className="banner">
      
        
      
    
      
     

//       <div className="img-slider">
//         <div>
//       <h2 className="text-center ">Try our New Menu</h2>
//       <p>Special menus every week with delicious meals</p>
//       </div>

//       <Carousel enableAutoPlay
//           autoPlaySpeed={2000} // Adjust the speed in milliseconds (e.g., 2000 for 2 seconds)
//           isRTL={false} // Set to true if you want the carousel to move from right to left
//           itemsToShow={1} // Show only one item at a time
//           showArrows={false} // Hide navigation arrows
//           pagination={true} // Hide bottom dots
//           disablePaginationOnKeydown // Disable arrow key navigation
//           enableMouseSwipe={false} // Disable mouse swipe navigation
//           isInfinite
//           > 
      
      
//       <img src="pizzas/burger.jpg" alt="burger pic" />
//       <img src="pizzas/spinaci.jpg" alt="burger pic" />
//       <img src="meals.jpg" alt="burger pic" /> 
      
      
//       </Carousel>
    

//       </div>
     

    
    
//     </div>
//   );
// }


