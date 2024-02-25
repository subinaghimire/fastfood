import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import Product from "./Product";
import Aboutus from "./Aboutus";
import Piza from "./Piza";
import Burger from "./Burger";
import Newmeal from "./Newmeal";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Footer from "./Footer";
import Imageslider from "./Imageslider";
import Carousel from "./Carousel";
import OurServices from "./OurServices";
import OurItems from "./OurItems";
import Menus from "./Menus";
import Careers from "./Careers";
import Login from "./Login";
// import Register from "./Register";
import MenuList from "./MenuList";
import Signup from "./Signup";
import Promos from "./Promos";


export default function App() {
  // const [items, setItems] = useState([]);

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  // function handleDeleteItem(id) {
  //   setItems((items) => items.filter((item) => item.id !== id));
  // }

  // function handleToggleItem(id) {
  //   setItems((items) =>
  //     items.map((item) =>
  //       item.id === id ? { ...item, packed: !item.packed } : item
  //     )
  //   );
  // }

  // function handleClearList() {
  //   const confirmed = window.confirm(
  //     "Are you sure want to delete all the items?"
  //   );
  //   if (confirmed) setItems([]);
  // }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Header />
             
              {/* <Piza />
              <Burger /> */}
                <Imageslider/>
                <Aboutus />
                <Promos />
                <MenuList />
                <OurItems />
               
                
                <Newmeal />
                <Carousel />
             
              {/* <Product onAddItems={handleAddItems} />
              <Form onAddItems={handleAddItems} />
           
              <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
              />
              <Stats items={items} />
               */}
              <Footer />
            </div>
          }
        />
       <Route path="/" element={<App />} />
       <Route path="/menus" element={<Menus />} />
        <Route path="/piza" element={<Piza />} />
        <Route path="/burger" element={<Burger />} />
         <Route path="/header" element={<Header/>} />
         <Route path="/ourservices" element={<OurServices />} />
         <Route path="/careers" element={<Careers />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
