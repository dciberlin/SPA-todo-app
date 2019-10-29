import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Help from '../views/Help';
import NotFound from '../views/NotFound';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    var items = JSON.parse(localStorage.getItem('spa-todo-app'));
    if (items) this.setState({ items });
  }

  updateItem = id => {
    const item = this.state.items.filter(el => el.id === id)[0];

    //We need to toggle the status of the item with `id`.
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else return item;
    });

    localStorage.setItem('spa-todo-app', JSON.stringify(items));
    this.setState({ items });
  };

  addItem = value => {
    const newItem = { id: new Date(), text: value, done: false };
    const items = [...this.state.items, newItem];
    localStorage.setItem('spa-todo-app', JSON.stringify(items));
    this.setState({ items });
  };

  render() {
    const toDos = this.state.items.filter(el => !el.done);
    const toDones = this.state.items.filter(el => el.done);

    return (
      <Router>
        <div className="app">
          <Navigation></Navigation>
          <Switch>
            <Route exact>
              <ToDosContainer
                items={toDos}
                handleChange={this.updateItem}
                handleAddTodo={this.addItem}
              ></ToDosContainer>
              <ToDonesContainer
                items={toDones}
                handleChange={this.updateItem}
              ></ToDonesContainer>
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
