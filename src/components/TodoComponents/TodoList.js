import React from 'react';
import Todo from './Todo';
import './TodoForm.css';

const TodoList = props => {
  return(
    <div className="todo-list">
      {props.todos.map(todo => {
        return(
          <Todo
            todo={todo}
            task={todo.task}
            key={todo.id}
            toggleTodo={props.toggleTodo}
          />
        )
      })}
    </div>
  )
}

export default TodoList;

