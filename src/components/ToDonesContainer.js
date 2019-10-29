import React from 'react';
import ToDoneItem from './ToDoneItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

class ToDonesContainer extends React.Component {
  render() {
    const todones = this.props.todos;

    const toDoNesItems = todones.map(el => {
      return <ToDoneItem item={el} key={el.id}></ToDoneItem>;
    });

    return (
      <div>
        {todones.length !== 0 && (
          <div className="todones-container">
            <div className="title">
              <h3>BACKLOG</h3>
              {todones.length === 0 && (
                <FontAwesomeIcon icon={faSpinner} spin />
              )}
            </div>
            {todones.length > 0 && toDoNesItems}
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
