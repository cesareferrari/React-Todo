import React from 'react'

const Todo = props => {
  return (
    <div className="task">
      {props.task}
    </div>
  )
}

export default Todo;
