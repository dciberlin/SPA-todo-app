import React from 'react';
import ToDoItem from './ToDoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class ToDosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', showWarning: false };

    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewTodoChange(event) {
    this.setState({ value: event.target.value, showWarning: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.length >= 3) {
      this.props.addTodo(this.state.value);
      this.setState({
        value: '',
        showWarning: false
      });
    } else {
      this.setState({
        showWarning: true
      });
    }
  }

  render() {
    const todos = this.props.todos;
    const toDoItems = todos.map(el => {
      return <ToDoItem item={el} key={el.id}></ToDoItem>;
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
          <div className="warning-container">
            {this.state.showWarning && (
              <small>Your todo should be at least 3 characters long</small>
            )}
          </div>
        </form>
        {todos.length !== 0 && (
          <div className="todos">
            <div className="title">
              <h3>TO DO</h3>
              {todos.length === 0 && <FontAwesomeIcon icon={faSpinner} spin />}
            </div>
            {todos.length > 0 && toDoItems}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.filter(item => !item.done)
});

export default connect(
  mapStateToProps,
  { addTodo }
)(ToDosContainer);
