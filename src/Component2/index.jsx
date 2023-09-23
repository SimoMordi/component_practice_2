import React, { useState } from "react";


const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <form className={selectedColor}>
        {["red", "green", "purple"].map(color => (
          <label>
            <input
              type="radio"
              value={color}
              checked={selectedColor === color}
              onChange={() => handleChange(color)}
            />
          </label>
        ))}
      </form>

    </div>
  );
};

export default ColorSelector;
