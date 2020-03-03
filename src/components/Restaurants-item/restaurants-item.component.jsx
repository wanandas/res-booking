import React from "react";
import "./restaurant.styles.scss";
import { Link } from "react-router-dom";

export const Restaurant = props => {
  return (
    <Link
      className="restaurant-container"
      to={`/restaurants/${props.restaurant.id}`}
    >
      <img
        alt="restaurant"
        src={`https://www.opentable.com/img/restimages/${props.restaurant.id}.jpg`}
      />
      <h2> {props.restaurant.name} </h2>
      <p> {props.restaurant.address} </p>
      <p>{props.restaurant.area}</p>
    </Link>
  );
};
