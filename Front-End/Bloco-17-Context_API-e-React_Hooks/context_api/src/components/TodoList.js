import React from 'react';
import GetTodo from './GetTodo';

import MyContext from './MyContext';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleClick = () => {
    const { todo } = this.state;
    this.setState ((prevState) => ({
      todos: prevState.todos.concat(todo),
      todo: ''
    }));
  }

  render() {
    const { todos, todo } = this.state;
    return (
      <>
        <input name="todo" onChange={ this.handleChange } value={ todo }/>
        <button type="button" onClick={ this.handleClick }>
          adicionar
        </button>
        <MyContext.Provider value={todos}>
          <GetTodo />
        </MyContext.Provider>
      </>
    )
  }
}

export default TodoList;
