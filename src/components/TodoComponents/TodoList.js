import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return(
    <div className="todo-list">
      {props.todos.map(todo => {
        return <Todo task={todo.task} id={todo.id} key={todo.id} />
      })}
    </div>
  )
}

export default TodoList;

