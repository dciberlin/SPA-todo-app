import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';

class News extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    console.log(this.props.news);
    return <div className="news-container"></div>;
  }
}

const mapStateToProps = state => {
  return { news: state.news };
};

export default connect(
  mapStateToProps,
  { fetchNews }
)(News);
