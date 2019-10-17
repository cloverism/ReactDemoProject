import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  // Get all keys from the object, then map the array of keys, then get an array of values
  collections => Object.keys(collections).map(key => collections[key])
);

// Get corresponding items array based on the params in url
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
