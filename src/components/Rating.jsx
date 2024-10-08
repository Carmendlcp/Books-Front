import React, { useState } from "react";
import "./Rating.css";

const Rating = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (newRating) => {
    onChange(newRating);
  };

  const handleMouseEnter = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= (hoverValue || value) ? "selected" : ""}`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
