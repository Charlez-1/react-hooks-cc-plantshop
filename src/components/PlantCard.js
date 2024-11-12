import React from "react";

function PlantCard({ plant }) {


  return (
    <li className="card" data-testid="plant-item" key={plant.id} >
      <div className="row w-75">  <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {plant.inStock ? (
      <button className="primary">In Stock</button>
      ):( 
        <button>Out of Stock</button>
      )}:</div>
    
    </li>
  );
}

export default PlantCard;