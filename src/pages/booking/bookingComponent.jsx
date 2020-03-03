import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/src/stylesheets/datepicker.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./booking.styles.scss";

function BookingComponent() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTate] = useState(new Date());

  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://opentable.herokuapp.com/api/restaurants/${id}`
      );
      setData(result.data);
    }
    fetchData();
  }, [id]);

  return (
    <div className="booking-container">
      <h1>{data.name}</h1>
      <img src={data.image_url} alt="restaurants" className="res-img" />
      <form className="date-time-container">
        <DatePicker
          className="datePick"
          showPopperArrow={false}
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
        <DatePicker
          className="datePick"
          selected={startTime}
          onChange={time => setStartTate(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
        <input className="search-input-submit" type="submit" value="Booking" />
      </form>
      <div className="res-about">
        <h3>About {`${data.name}`}</h3>
        <p>address: {`${data.address}`}</p>
        <p>city: {`${data.city}`}</p>
        <p>postal code: {`${data.postal_code}`}</p>
        <p>phone : {`${data.phone}`}</p>
      </div>
    </div>
  );
}
export default BookingComponent;
