import React from 'react'

const TodoForm = props => {
  return(
    <div>
    <form name="addTodo">
      <input
        type="text"
        name="todoTask"
        onChange={props.changeHandler}
        placeholder="...todo" />

      <button onClick={props.addTodoHandler}>Add Todo</button>
      <button name="clear">Clear Completed</button>
    </form>
    </div>
  )
}

export default TodoForm;
