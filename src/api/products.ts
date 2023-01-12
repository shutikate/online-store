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
  const res = await axios.get<IData>('https://raw.githubusercontent.com/shutikate/online-shop-photo/main/data.json');
  return res.data.products;
}