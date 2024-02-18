import React from 'react';

function BookingDetails({ bookings }) {
  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      <div className="details-list">
        {bookings.map((booking, index) => (
          <div key={index} className="booking-item">
            <p>
              <strong>Name:</strong> {booking.name}
            </p>
            <p>
              <strong>Number of Tickets:</strong> {booking.numTickets}
            </p>
            <p>
              <strong>Seats:</strong> {booking.seats.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingDetails;
