import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/hompage.component";
import Booking from "./pages/booking/booking.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/restaurants" component={Booking} />
      </Switch>
    </div>
  );
}

export default App;
