import { useMemo, useState } from 'react';
import { IProducts } from '../api/products';

interface CartData {
  [key: string | number]: {
    amount: number
  }
}

const putCartToLocalStorage = (cartData: CartData) => localStorage.setItem('cart-shutikate', JSON.stringify(cartData));

const getCartFromLocalStorage = (): CartData => JSON.parse(localStorage.getItem('cart-shutikate') || '{}');

export const useCart = (products: IProducts[]) => {
  const [productsDataInCart, setCartIdProducts] = useState<CartData>(getCartFromLocalStorage());

  const cartProducts = useMemo(
    () => products.filter(product => product.id in productsDataInCart),
    [productsDataInCart, products]
  );

  const addProductIdToCart = (id: number) => {
    const updatedCart = {...productsDataInCart, [id]: { amount: 1 }};
    putCartToLocalStorage(updatedCart);
    setCartIdProducts(updatedCart);
  };

  const dropProductFromCart = (id: number) => {
    const {[id]: _, ...updatedCart} = productsDataInCart;
    putCartToLocalStorage(updatedCart);
    setCartIdProducts(updatedCart);
  };

  const isProductInCart = (id?: number) => {
    return id ? id in productsDataInCart : false;
  }

  const increaseProductAmount = (id: number) => {
    if(productsDataInCart[id]) {
      const updatedCart = { ...productsDataInCart, [id]: { amount: productsDataInCart[id].amount + 1 } };
      setCartIdProducts(updatedCart);
      putCartToLocalStorage(updatedCart);
    }
  };

  const decreaseProductAmount = (id: number) => {
    if(productsDataInCart[id]) {
      if(productsDataInCart[id].amount === 1) {
        const { [id]: _, ...updatedCart } = productsDataInCart;
        setCartIdProducts(updatedCart);
        putCartToLocalStorage(updatedCart);
      } else {
        const updatedCart = { ...productsDataInCart, [id]: { amount: productsDataInCart[id].amount - 1 } };
        setCartIdProducts(updatedCart);
        putCartToLocalStorage(updatedCart);
      }
    }

  };

  const getProductAmountInCart = (id: number) => {
    if(productsDataInCart[id]) {
      return productsDataInCart[id].amount;
    }
    return 0;
  };

  const cartTotalAmount = useMemo(() => {
    return cartProducts.reduce((acc, product) => acc + getProductAmountInCart(product.id), 0);
  }, [cartProducts, productsDataInCart]);

  const cartTotal = useMemo(() => {
    return cartProducts.reduce((acc, product) => acc + (product.price * getProductAmountInCart(product.id)), 0);
  }, [cartProducts, productsDataInCart]);

  return {
    addProductIdToCart,
    dropProductFromCart,
    increaseProductAmount,
    decreaseProductAmount,
    getProductAmountInCart,
    isProductInCart,
    cartTotal,
    cartTotalAmount,
    cartProducts
  }
};
