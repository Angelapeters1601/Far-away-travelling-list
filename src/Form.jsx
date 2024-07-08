import React, { useState } from "react";

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return; //prevents submitting empty form

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1); //returns state to original after submission
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 😍 trip ?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (currValue, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
