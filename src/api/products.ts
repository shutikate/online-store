import axios from 'axios';

interface IData {
  limit: number;
  products: Array<IProducts>;
  skip: number;
  total: number;
}

export interface IProducts {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],
}

export async function getAllProducts () {
  const res = await axios.get<IData>('https://dummyjson.com/products?limit=100');
  return res.data.products;
}