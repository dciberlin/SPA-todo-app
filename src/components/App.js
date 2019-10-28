import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';

const App = () => {
  return (
    <div className="app">
      <Navigation></Navigation>
      <ToDosContainer></ToDosContainer>
      <ToDonesContainer></ToDonesContainer>
    </div>
  );
};

export default App;
