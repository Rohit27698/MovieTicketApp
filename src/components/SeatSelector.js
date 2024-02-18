import React from 'react';

function SeatSelector({ onSelect, selectedSeats }) {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSeatClick = (row, col) => {
    onSelect(`${row}${col}`);
  };

  return (
    <div className="seat-selector">
      <h2>Seat Selector</h2>
      <div className="seats-container">
        {rows.map((row) => (
          <div key={row} className="seat-row">
            {cols.map((col) => (
              <div
                key={col}
                className={`seat ${selectedSeats.includes(`${row}${col}`) ? 'selected' : ''}`}
                onClick={() => handleSeatClick(row, col)}
              >
                {`${row}${col}`}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatSelector;
