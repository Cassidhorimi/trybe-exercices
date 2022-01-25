import React, { Component } from 'react';

export default class Home extends Component {
    constructor() {
      super();
      this.state = {
        task: '',
        saveTask: [],
      }
    }
  
    handleChange = ({ target }) => {
      this.setState({
        task: target.value
      })
    }

    handleClick = () => {
      const { task } = this.state;
      this.setState((prev) => ({
        saveTask: [...prev.saveTask, task],
        task: '',
      }));
    }
  
    render() {
      const {
        task,
        saveTask,
      } = this.state;
  
      return (
        <>
          <label>
            Digite sua tarefa:
            <input
              type="text"
              value={ task }
              onChange={ this.handleChange }
            />
          </label>
          <label>
            <input
              type="button"
              value="Salvar"
              onClick={ this.handleClick }
            />
          </label>
          <div data-testid="task-id">
            {saveTask.length >= 1 && saveTask.map((item, index) => (
                <p key={ index }>{item}</p>
            ))}
          </div>
        </>
      );
    } 
}
