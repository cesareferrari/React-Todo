import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div
      key={props.id}
      className={`task${props.todo.completed ? " completed" : ""}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      {props.task}
    </div>
  )
}

export default Todo;
