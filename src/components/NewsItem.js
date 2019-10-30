import React from 'react';

class NewsItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <div className="news-item">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <div className="img-container">
            <img src={item.urlToImage} alt="img"></img>
          </div>
          <div className="text-container">
            <div className="title">
              <h5>{item.title}</h5>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default NewsItem;
