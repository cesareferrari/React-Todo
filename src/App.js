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
      todos: [...this.state.todos, newTodo],
      todoTask: ''
    })
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  toggleTodo = todoId => {
    // console.log('todoId: ', todoId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />

        <TodoForm
          changeHandler={this.changeHandler}
          addTodoHandler={this.addTodoHandler} 
          todoTask={this.state.todoTask}
        />
      </div>
    );
  }
}

export default App;
