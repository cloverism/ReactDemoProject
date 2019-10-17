import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

// match -> get this props from <Route />
// match.params
// -> If path in <Route /> is set a "/shop/:collectionId" and the url is /shop/999
// -> then match.params.collectionId = 999
const CollectionPage = ({ collection }) => {
  console.log(collection.items);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// state -> overall reducer state from the top
// ownProps -> props in CategoryPage
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
