import React from 'react';
import Home from './Home';
const ProductDetail = React.lazy(() => import('./ProductDetail'));
const Products = React.lazy(() => import('./Products'));

export {
  Home,
  ProductDetail,
  Products
}
