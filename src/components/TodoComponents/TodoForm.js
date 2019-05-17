import React from 'react'

const TodoForm = props => {
  return(
    <div className="add-task-form">
    <form name="addTodo">

    <div className="add-task">
      <input
        type="text"
        name="todoTask"
        value={props.todoTask}
        onChange={props.changeHandler}
        placeholder="Enter New Todo..." />

      <button className="add-btn" onClick={props.addTodoHandler}>Add Todo</button>
    </div>

    <div className="clear-tasks">
      <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed Todos</button>
    </div>
    </form>
    </div>
  )
}

export default TodoForm;
