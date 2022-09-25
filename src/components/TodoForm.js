import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ id: Math.floor(Math.random() * 100000), text: input });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        onChange={handleChange}
        className="input1"
      />
      <button className="btn1">Add Item</button>
    </form>
  );
}

export default TodoForm;
