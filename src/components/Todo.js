import React, { useState } from "react";

function Todo({ todos, deleteTodo, completeTodo, setTodos }) {
  const [todoEdit, setTodoEdit] = useState({
    id: null,
    value: "",
  });
  const [editingText, setEditingText] = useState("");

  const update = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodo);

    setTodoEdit(null);
    setEditingText();
  };
  const handleEdit = (e) => {
    setEditingText(e.target.value);
  };

  return todos.map((todo, index) => (
    <div key={index} className="todo-container">
      <input
        type="checkbox"
        onChange={() => completeTodo(todo.id)}
        className="checkbox"
      />
      {todoEdit === todo.id ? (
        <input
          type="text"
          onChange={handleEdit}
          value={editingText}
          className="input3"
        />
      ) : (
        <div key={todo.id} className="input2">
          {todo.text}
        </div>
      )}

      {todoEdit === todo.id ? (
        <button onClick={() => update(todo.id)} className="update">
          Update
        </button>
      ) : (
        <button onClick={() => setTodoEdit(todo.id)} className="edit">
          Edit
        </button>
      )}
      <button onClick={() => deleteTodo(todo.id)} className="delete">
        delete
      </button>
    </div>
  ));
}

export default Todo;
