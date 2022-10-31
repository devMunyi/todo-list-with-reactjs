import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    const { handleChangeProps, deleteTodoProps, setUpdateProps } = this.props;
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdateProps={setUpdateProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
