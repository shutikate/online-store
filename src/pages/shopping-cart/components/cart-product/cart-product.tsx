import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CartProductContainer,
  ImgWrapper,
  NumberWrapper,
  CartDescriptionWrapper,
  NameProductWrapper,
  DescriptionOfProduct,
  RatingDiscountWrapper,
  ProductAmountInCart,
  ButtonPriceWrapper,
  ButtonWrapper,
  Price
} from "./cart-product.styled";
import Button, { BUTTON_TYPE_CLASSES } from "../../../../components/buttons/buttons";
import { IProducts } from "../../../../api/products";
import { ProductsContext } from "../../../../context/products-context";

interface CartProductProps extends IProducts {
  index: number;
}

const CartProduct: FC<CartProductProps> = ({
  title,
  price,
  rating,
  discountPercentage,
  description,
  thumbnail,
  id,
  stock,
  index
}) =>
{
  const { increaseProductAmount, decreaseProductAmount, getProductAmountInCart } = useContext(ProductsContext);
  const productAmountInCart = getProductAmountInCart(id);
  return (
    <CartProductContainer>
      <NumberWrapper>{index + 1}</NumberWrapper>
      <ImgWrapper>
        <Link to={`/product-details/${id}`}>
          <img
            src={thumbnail}
            alt=""
            id={String(id)}
          ></img>
        </Link>
      </ImgWrapper>
      <CartDescriptionWrapper>
        <NameProductWrapper>{title}</NameProductWrapper>
        <DescriptionOfProduct>{description}</DescriptionOfProduct>
        <RatingDiscountWrapper>
          <p>Rating: {rating}</p>
          <p>Discount: {discountPercentage}%</p>
          <p>Stock: {stock}</p>
        </RatingDiscountWrapper>
      </CartDescriptionWrapper>
      <ButtonPriceWrapper>
        <ButtonWrapper>
          <Button disabled={productAmountInCart >= stock} onClick={() => increaseProductAmount(id)} buttonType={BUTTON_TYPE_CLASSES.small}>+</Button>
            <ProductAmountInCart>{productAmountInCart}</ProductAmountInCart>
          <Button onClick={() => decreaseProductAmount(id)} buttonType={BUTTON_TYPE_CLASSES.small}>-</Button>
        </ButtonWrapper>
        <Price>${price * productAmountInCart}</Price>
      </ButtonPriceWrapper>
    </CartProductContainer>
  );
};

export default CartProduct;
