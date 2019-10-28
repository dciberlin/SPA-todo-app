import React from 'react';
import ToDoItem from './ToDoItem';

class ToDosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewTodoChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddTodo(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    const todos = this.props.items;

    const toDoItems = todos.map(el => {
      return (
        <ToDoItem
          item={el}
          key={el.id}
          onStatusChange={this.props.handleChange}
        ></ToDoItem>
      );
    });

    return (
      <div className="todos-container">
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label className="input-item">
            <input
              type="text"
              name="todo"
              value={this.state.value}
              onChange={this.handleNewTodoChange}
            />
          </label>
          <input className="btn" type="submit" value="ADD" />
        </form>
        <div className="todos">
          <h3>TO DO</h3>
          {todos.length > 0 && toDoItems}
        </div>
      </div>
    );
  }
}

export default ToDosContainer;
