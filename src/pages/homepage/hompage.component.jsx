import React from "react";
import "./homepage.styles.scss";
import axios from "axios";
import { RestaurantsList } from "../../components/restaurants-list/restaurants-list.component";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      search: ""
    };
  }
  getRestaurant = () =>
    axios.get("http://opentable.herokuapp.com/api/restaurants?city=Chicago");

  componentDidMount() {
    this.getRestaurant().then(response => {
      this.setState({
        restaurants: response.data.restaurants
      });
    });
  }

  handerChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    const { restaurants, search } = this.state;

    const filteredRestaurant = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="homepage">
        {/* Home section  */}

        <section
          className="home"
          style={{
            backgroundImage: `url(
            "https://s3-us-west-1.amazonaws.com/availableflatsurface-seed/one-off-use/splash.png"
          )`
          }}
        >
          <h1>Find your table for any occasion</h1>
          <form>
            <input
              className="search-input"
              type="text"
              placeholder="Restaurant name"
              onChange={this.handerChange}
              value={this.state.search}
            />
          </form>
        </section>

        <section className="recommendations">
          <h2 className="head-res">Restaurants</h2>
          <RestaurantsList restaurants={filteredRestaurant} />
        </section>
      </div>
    );
  }
}
export default Homepage;
