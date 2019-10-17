import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName, history }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 3)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
      <div
        className="footer"
        onClick={() => {
          history.push(`/shop/${routeName}`);
        }}
      >
        More...
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
