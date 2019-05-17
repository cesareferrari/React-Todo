import React from 'react'

const TodoForm = props => {
  return(
    <div>
    <form name="addTodo">
      <input
        type="text"
        name="todoTask"
        value={props.todoTask}
        onChange={props.changeHandler}
        placeholder="...todo" />

      <button onClick={props.addTodoHandler}>Add Todo</button>

      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
    </div>
  )
}

export default TodoForm;
