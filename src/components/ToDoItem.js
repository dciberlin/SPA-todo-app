import React from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions';

class ToDoItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <div className="todo-item">
        <p>{item.text}</p>
        <div className="actions">
          <button
            className="btn"
            onClick={() => this.props.updateTodo(item.id)}
          >
            &#10004;
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { updateTodo }
)(ToDoItem);
