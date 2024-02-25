import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form({ onAddItems }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  };

  const handleAddItem = () => {
    // Handle the selected option here
    console.log("Selected Option:", selectedOption);

    // Add your logic for navigation
    // Note: This will navigate when the button is clicked, not when selecting from the dropdown
  };

  return (
    <form className="add-form">
      <h3> Our Products </h3>
      <select onChange={handleSelect}>
        {/* <option value="" disabled>Select an option</option> */}
        <option value="/">Select</option>
        <option value="/piza">Pizza </option>
        <option value="/burger">Burger</option>
      </select>
      <Link to={selectedOption}>
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </Link>
    </form>
  );
}
