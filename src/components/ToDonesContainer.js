import React from 'react';

const ToDonesContainer = props => {
  const todones = props.items;

  const toDoNesItems = todones.map(el => {
    return (
      <div className="todones-item" key={el.text}>
        <p>{el.text}</p>
        <div className="actions">
          <button className="btn">&#8635;</button>
        </div>
      </div>
    );
  });

  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {todones.length > 0 && toDoNesItems}
    </div>
  );
};

export default ToDonesContainer;
