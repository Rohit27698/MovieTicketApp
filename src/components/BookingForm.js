import React, { useState } from 'react';

function BookingForm({ onBooking, selectedSeats }) {
  const [name, setName] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      name,
      numTickets,
      seats: selectedSeats,
    };
    onBooking(booking);
    setName('');
    setNumTickets(1);
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Number of Tickets:</label>
        <select value={numTickets} onChange={(e) => setNumTickets(parseInt(e.target.value))}>
          {[...Array(8).keys()].map((num) => (
            <option key={num} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        <button type="submit" disabled={!name || selectedSeats.length !== numTickets}>
          Book
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
