import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './RestaurantDetails.css';

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://apis.ccbp.in/restaurants-list/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const restaurantData = await response.json();
        setRestaurantData(restaurantData);
        console.log(restaurantData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{restaurantData.name}</h1>
      <img src={restaurantData.image_url} alt={restaurantData.name} />
      <p>Cost for Two: ₹{restaurantData.cost_for_two}</p>
      <p>Cuisine: {restaurantData.cuisine}</p>
      <p>Location: {restaurantData.location}</p>
      <p>Opens at: {restaurantData.opens_at}</p>
      <p>Rating: {restaurantData.rating}</p>
      <p>Reviews Count: {restaurantData.reviews_count}</p>
      {/* Render food items */}
      <h3>Food Items:</h3>
      <div>
        {restaurantData.food_items?.map((foodItem) => (
          <div key={foodItem.id}>
            <img src={foodItem.image_url} alt={foodItem.name} />
            <h4>{foodItem.name}</h4>
            <p>₹{foodItem.cost}</p>
            <p>Rating: {foodItem.rating}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantDetails;
