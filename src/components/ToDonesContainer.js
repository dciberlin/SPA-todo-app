import React from 'react';

const ToDonesContainer = () => {
  const todones = [
    { text: 'Make a website', done: true },
    { text: 'Call my mom', done: true },
    { text: 'Finish reading my book', done: true },
    { text: 'Make more moneys', done: true }
  ];

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
