import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Help from '../views/Help';
import NotFound from '../views/NotFound';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation></Navigation>
        <Switch>
          <Route>
            <ToDosContainer></ToDosContainer>
            <ToDonesContainer></ToDonesContainer>
          </Route>
          <Route exact path="/help" component={Help}></Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(App));
