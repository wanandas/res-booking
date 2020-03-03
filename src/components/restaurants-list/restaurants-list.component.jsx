import React from "react";
import "./restaurants-list.styles.css";
import { Restaurant } from "../Restaurants-item/restaurants-item.component";

export const RestaurantsList = props => {
  return (
    <div className="restaurants-list">
      {props.restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
