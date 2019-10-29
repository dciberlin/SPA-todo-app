import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Help from '../views/Help';
import NotFound from '../views/NotFound';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`http://localhost:3001/todos`);
      const items = res.data;
      this.setState({ items });
    } catch (err) {
      console.log(err);
    }
  }

  updateItem = async id => {
    //find the item
    try {
      const item = this.state.items.filter(el => el.id === id)[0];
      const res = await axios.put(`http://localhost:3001/todos/${id}`, {
        change: { done: !item.done }
      });

      // We need to toggle the status of the item with `id`.
      const items = this.state.items.map(item => {
        if (item.id === id) {
          item.done = !item.done;
          return item;
        } else return item;
      });

      this.setState({ items });
    } catch (err) {
      console.log(err);
    }
  };

  addItem = async value => {
    try {
      const newItem = { id: new Date(), text: value, done: false };
      const res = await axios.post('http://localhost:3001/todos', newItem);
      this.setState({
        items: [...this.state.items, newItem]
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const toDos = this.state.items.filter(el => !el.done);
    const toDones = this.state.items.filter(el => el.done);

    return (
      <Router>
        <div className="app">
          <Navigation></Navigation>

          <Switch>
            <Route exact path="/">
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
