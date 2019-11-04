import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';
import NewsItem from './NewsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

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
        <div className="title">
          <h5>BBC News</h5>
          {this.props.news.length === 0 && (
            <FontAwesomeIcon icon={faSpinner} spin />
          )}
        </div>
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
