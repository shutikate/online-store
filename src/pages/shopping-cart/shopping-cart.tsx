import { useContext, useMemo } from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./shopping-cart.styled";
import { ProductsContext } from '../../context/products-context';
import Button, { BUTTON_TYPE_CLASSES } from "../../components/buttons/buttons";
import CartProduct from './components/cart-product/cart-product';
import { usePagination } from '../../hooks/use-pagination';
const ShoppingCart = () => {
  const { cartProducts } = useContext(ProductsContext);

  const cartTotal = useMemo(() => cartProducts.reduce((acc, product) => acc + product.price, 0), [cartProducts]);

  const {
    currentItems: paginatedCartProducts,
    limit,
    page,
    lastPage,
    updateLimit,
    goPrevPage,
    goNextPage,
  } = usePagination(cartProducts);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Products in your cart</span>
        </HeaderBlock>
        <HeaderBlock>
          Limit: <input type="number" min="1" value={limit} onChange={({ target }) => updateLimit(Number(target.value))} />
        </HeaderBlock>
        <HeaderBlock>
          Page:
          <Button disabled={page === 1} onClick={goPrevPage} buttonType={BUTTON_TYPE_CLASSES.small}>{'<'}</Button>
          {page}
          <Button disabled={page === lastPage} onClick={goNextPage} buttonType={BUTTON_TYPE_CLASSES.small}>{'>'}</Button>
        </HeaderBlock>
      </CheckoutHeader>
      {paginatedCartProducts.map((product, index) => <CartProduct key={product.id} index={index} {...product} />)}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default ShoppingCart;
