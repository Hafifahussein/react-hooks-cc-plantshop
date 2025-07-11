import React, { useState } from "react";

function PlantCard({ plant, onToggleSoldOut, onUpdatePrice, onDeletePlant }) {
  const { id, name, image, price, soldOut } = plant;
  const [newPrice, setNewPrice] = useState(price);

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>

      <button onClick={() => onToggleSoldOut(id)}>
        {soldOut ? "Sold Out" : "In Stock"}
      </button>

      {/* Optional Price Update */}
      <input
        type="number"
        value={newPrice}
        step="0.01"
        onChange={(e) => setNewPrice(parseFloat(e.target.value))}
      />
      <button onClick={() => onUpdatePrice(id, newPrice)}>
        Update Price
      </button>

      {/* Optional Delete */}
      <button onClick={() => onDeletePlant(id)} style={{ color: "red" }}>
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
