import React from 'react'

const TodoForm = props => {
  return(
    <div>
    <form name="addTodo">
      <input name="todo" placeholder="...todo" />
      <button name="addTodo">Add Todo</button>
      <button name="clear">Clear Completed</button>
    </form>
    </div>
  )
}

export default TodoForm;
