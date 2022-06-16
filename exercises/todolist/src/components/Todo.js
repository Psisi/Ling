import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.length > 0 ? (
    todos.map((todo, index) => (
      <TodoItem
        todo={todo}
        index={index}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        onEdit={setEdit}
      />
    ))
  ) : (
    <div>You do not have any todo yet</div>
  );
}

export default Todo;
