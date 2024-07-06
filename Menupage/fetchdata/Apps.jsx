import React, { useState } from 'react';
import RestaurantsList from './RestaurantsList';
import RestaurantDetails from './RestaurantDetails'; // Adjust the import path

function Apps() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsList onRestaurantClick={handleRestaurantClick} />
      {selectedRestaurant && <RestaurantDetails restaurant={selectedRestaurant} />}
    </div>
  );
}

export default Apps;
