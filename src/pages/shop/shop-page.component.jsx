import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';
import './shop-page.styles.scss';

export default class ShopPage extends Component {
  // props -> from ReactRouterDOM
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, title, routeName, items }) => (
          <CollectionPreview
            key={id}
            title={title}
            routeName={routeName}
            items={items}
          />
        ))}
      </div>
    );
  }
}
