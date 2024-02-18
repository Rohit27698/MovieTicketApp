import React, { useState } from 'react';
import './App.css';
import BookingForm from './components/BookingForm';
import SeatSelector from './components/SeatSelector';
import BookingDetails from './components/BookingDetails';

function App() {
  const [bookingDetails, setBookingDetails] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleBooking = (booking) => {
    setBookingDetails([...bookingDetails, booking]);
    setSelectedSeats([]);
  };

  const handleSeatSelect = (seat) => {
    setSelectedSeats([...selectedSeats, seat]);
  };

  return (
    <div className="App">
      <h1>Book My Movie</h1>
      <div className="booking-container">
        <div className="left-panel">
          <BookingForm onBooking={handleBooking} selectedSeats={selectedSeats} />
          <SeatSelector onSelect={handleSeatSelect} selectedSeats={selectedSeats} />
        </div>
        <div className="right-panel">
          <BookingDetails bookings={bookingDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
