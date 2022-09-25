import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function Todolist() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  const deleteTodo = (id) => {
    const deletebutton = [...todos].filter((todo) => todo.id !== id);
    setTodos(deletebutton);
    console.log(deletebutton);
  };
  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
    console.log(updatedTodo);
  };
  // const updateEdit = (todoId, newValue) => {
  //   if (!newValue.text || /^\s*$/.test(newValue.text)) {
  //     return;
  //   }

  //   setTodos((prev) =>
  //     prev.map((item) => (item.id === todoId ? newValue : item))
  //   );
  // };

  return (
    <div>
      <h1 className="headings">What's in your mind today ?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        // updateEdit={updateEdit}
        setTodos={setTodos}
      />
    </div>
  );
}

export default Todolist;
