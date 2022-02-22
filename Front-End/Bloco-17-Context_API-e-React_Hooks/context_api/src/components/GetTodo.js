import React from 'react';

import MyContext from './MyContext';

class GetTodo extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          value => (
            <ul>
              {value.map((todo, i) => (
                <li key={ i }>{todo}</li>
              ))}
            </ul>
          )
        }
      </MyContext.Consumer>
    )
  }
}

export default GetTodo;
