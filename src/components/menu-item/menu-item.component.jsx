import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  return (
    <div
      className={`${size} menu-item`}
      // history.push() -> function of reactRouterDom, push to another route
      // ${match.url}${linkUrl} -> route based on previous url and linkUrl passed by withRouter
      onClick={() => history.push(`/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">商品をチェック</span>
      </div>
    </div>
  );
};

// withRouter() -> have access of react router props -> history, match, location...
export default withRouter(MenuItem);
