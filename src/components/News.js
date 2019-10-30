import React from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions';

class News extends React.Component {
  render() {
    return <div className="news-container"></div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { updateTodo }
)(News);
