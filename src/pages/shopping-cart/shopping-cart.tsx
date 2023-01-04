import { useContext, useMemo, useState } from 'react';
import PurchaseModal from 'react-modal';
import {
  CartContainer,
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  NumberWrapper,
  EmptyCart
} from './shopping-cart.styled';
import { ProductsContext } from '../../context/products-context';
import { usePagination } from '../../hooks/use-pagination';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/buttons/buttons';
import CartProduct from './components/cart-product/cart-product';
import TotalCart from './components/total-cart/total-cart';
import Purchase from './components/purchase/purchase';

const promocodes = [
  { id: 'rs', type: 1, description: 'Rolling Scopes School - 10%'},
  { id: 'epm', type: 2, description: 'EPAM systems - 15%'},
  { id: '2023', type: 3, description: 'New Year gift - 5%'},
];

const ShoppingCart = () => {
  const { cartProducts, cartTotalAmount, cartTotal } = useContext(ProductsContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cartProductsWithIndexes = useMemo(() => cartProducts.map((product, index) => ({ ...product, index })), [cartProducts]);

  const {
    currentItems: paginatedCartProducts,
    limit,
    page,
    lastPage,
    updateLimit,
    goPrevPage,
    goNextPage,
  } = usePagination(cartProductsWithIndexes, 3);

  const onOpenPurchaseModal = () => {
    setModalIsOpen(true);
  };

  const onClosePurchaseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <CartContainer>
    {(cartTotalAmount === 0)
    ? <EmptyCart>Cart is Empty</EmptyCart>
    :
    <>
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            Products in cart
          </HeaderBlock>
          <HeaderBlock>
            <span>Limit:</span><input type="number" min="1" value={limit} onChange={({ target }) => updateLimit(Number(target.value))} />
          </HeaderBlock>
          <HeaderBlock>
            <span>Page:</span>
            <Button disabled={page === 1} onClick={goPrevPage} buttonType={BUTTON_TYPE_CLASSES.small}>{'<'}</Button>
            <NumberWrapper>{page}</NumberWrapper>
            <Button disabled={page === lastPage} onClick={goNextPage} buttonType={BUTTON_TYPE_CLASSES.small}>{'>'}</Button>
          </HeaderBlock>
        </CheckoutHeader>
        {paginatedCartProducts.map(product => <CartProduct key={product.id} {...product} />)}
      </CheckoutContainer>
      <TotalCart promocodes={promocodes} totalAmount={cartTotal} productsAmount={cartTotalAmount} onOpenPurchaseModal={onOpenPurchaseModal} />
      <PurchaseModal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={onClosePurchaseModal}><Purchase /></PurchaseModal>
    </>
    }
    </CartContainer>
  );
};

export default ShoppingCart;
