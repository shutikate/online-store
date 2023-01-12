import { filterByCategories, filterByPrice, filterBySearch } from './hooks/use-filters';
import { sortByPriceAsc, sortByPriceDesc } from './hooks/use-sorting';

const product1 = {
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-1-2.jpg",
  "images": [
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-1-1.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-1-2.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-1-3.jpg"
  ]
}
const product2 = {
  "id": 2,
  "title": "iPhone X",
  "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  "price": 899,
  "discountPercentage": 17.94,
  "rating": 4.44,
  "stock": 34,
  "brand": "Apple",
  "category": "laptops",
  "thumbnail": "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-2-1.jpg",
  "images": [
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-2-1.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-2-2.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-2-3.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-2-4.jpg"
  ]
};

const product3 = {
  "id": 5,
  "title": "Samsung Galaxy Book",
  "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
  "price": 1499,
  "discountPercentage": 4.15,
  "rating": 4.25,
  "stock": 50,
  "brand": "Samsung",
  "category": "shoes",
  "thumbnail": "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-5-1.jpg",
  "images": [
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-5-1.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-5-2.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-5-3.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-5-4.jpg"
  ]
};

const product4 = {
  "id": 12,
  "title": "Tree Oil 30ml",
  "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
  "price": 12,
  "discountPercentage": 4.09,
  "rating": 4.52,
  "stock": 78,
  "brand": "Hemani Tea",
  "category": "skincare",
  "thumbnail": "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-12-1.jpg",
  "images": [
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-12-1.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-12-2.jpg",
      "https://raw.githubusercontent.com/shutikate/online-shop-photo/main/photo-shop/product-12-3.jpg"
  ]
}

describe('Take category of element and check if it exists among the elements', () => {
  it('return true if category exists', () => {
    expect(filterByCategories(product1, ['smartphones', 'skincare'])).toBeTruthy();
  });
  it('return false if category not exists', () => {
    expect(filterByCategories(product2, ['smartphones', 'skincare'])).toBeFalsy();
  });
});

describe('Take price of element and check if the price is within the price range of the item', () => {
  const param1 = ['12', '30'];
  const param2 = ['1499'];
  const param3 = ['900', '1900'];
  it('return true if price included', () => {
    expect(filterByPrice(product4, param1)).toBeTruthy();
  });
  it('return true if price included', () => {
    expect(filterByPrice(product3, param2)).toBeTruthy();
  });
  it('return false if price not included', () => {
    expect(filterByCategories(product2, param3)).toBeFalsy();
  });
});

describe('Sorts elements in ascending and descending order', () => {
  const products = [product3, product4];
  it('the first element is less than the second', () => {
    expect(sortByPriceAsc(products)[0] <= sortByPriceAsc(products)[1]).toBeTruthy();
  });
  it('the second element is less than the first', () => {
    expect(sortByPriceDesc(products)[0] >= sortByPriceDesc(products)[1]).toBeTruthy();
  });
});

describe('Search element', () => {
  it('element includes search value', () => {
    expect(filterBySearch(product1, ['apple'])).toEqual(true);
  });
  it('element includes search value', () => {
    expect(filterBySearch(product2, ['34'])).toEqual(true);
  });
  it('element includes search value', () => {
    expect(filterBySearch(product3, ['hgjgjgj'])).toEqual(false);
  });
});




