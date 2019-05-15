import React from 'react'

const Todo = props => {
  return (
    <div id={props.id} key={props.id} className="task">
      {props.task}
    </div>
  )
}

export default Todo;
