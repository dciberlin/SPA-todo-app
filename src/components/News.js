import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';
import NewsItem from './NewsItem';

class News extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    const newsItems = this.props.news.map(el => {
      return <NewsItem item={el} key={el.url}></NewsItem>;
    });

    return (
      <div className="news-container">
        <h5>BBC News</h5>
        {newsItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { news: state.news };
};

export default connect(
  mapStateToProps,
  { fetchNews }
)(News);
