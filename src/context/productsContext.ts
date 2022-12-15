import React from 'react';
import { IProducts } from '../api/products';

export const ProductsContext = React.createContext<IProducts[]>([]);
