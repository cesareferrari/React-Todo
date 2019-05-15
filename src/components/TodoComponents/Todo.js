import React from 'react'

const Todo = props => {
  return (
    <div id={props.key} className="task">
      {props.task}
    </div>
  )
}

export default Todo;
