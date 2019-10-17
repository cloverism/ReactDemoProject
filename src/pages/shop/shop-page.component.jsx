import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import './shop-page.styles.scss';

const ShopPage = ({ match }) => {
  return (
    // match.path -> current path
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      {/* :categoryId -> access collectionId as parameter */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
