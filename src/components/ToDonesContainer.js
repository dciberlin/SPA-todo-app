import React from 'react';
import ToDoneItem from './ToDoneItem';
import { connect } from 'react-redux';

class ToDonesContainer extends React.Component {
  render() {
    const todones = this.props.todos;

    const toDoNesItems = todones.map(el => {
      return <ToDoneItem item={el} key={el.id}></ToDoneItem>;
    });

    return (
      <div>
        {todones.length > 0 && (
          <div className="todones-container">
            <div className="title">
              <h3>BACKLOG</h3>
            </div>
            {toDoNesItems}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.filter(item => item.done)
});

export default connect(mapStateToProps)(ToDonesContainer);
