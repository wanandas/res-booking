import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BookingComponent from "./bookingComponent";

const Booking = () => {
  let { path } = useRouteMatch();
  return (
    <Route path={`${path}/:id`}>
      <BookingComponent />
    </Route>
  );
};
export default Booking;
