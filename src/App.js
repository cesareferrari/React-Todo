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
      todos: todos,
      todoTask: ''
    }
  }

  addTodoHandler = event => {
    event.preventDefault();

    let newTodo = {
      task: this.state.todoTask,
      id: new Date().getTime(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })


    console.log('Add todo', event.target);
  }

  changeHandler = event => {
    console.log('Target name:', event.target.name);
    console.log('Target value', event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm changeHandler={this.changeHandler} addTodoHandler={this.addTodoHandler} />
      </div>
    );
  }
}

export default App;
