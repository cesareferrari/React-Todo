import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  addTodoHandler(event) {
    event.preventDefault();
    console.log('Add todo', event.target);
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodoHandler={this.addTodoHandler} />
      </div>
    );
  }
}

export default App;
