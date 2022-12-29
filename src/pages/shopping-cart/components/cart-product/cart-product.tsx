import { FC, useContext } from "react";
import { CartProductContainer } from "./cart-product.styled";
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
      <p>{index + 1}</p>
      <img
        onClick={(e) => {
          console.log(e.target);
        }}
        src={thumbnail}
        alt=""
        id={String(id)}
      ></img>
      <div>
        <p>{title}</p>
        <p>{description}$</p>
        <p>Rating: {rating}</p>
        <p>Discount: {discountPercentage} %</p>
        <p></p>
      </div>
      <Button disabled={productAmountInCart >= stock} onClick={() => increaseProductAmount(id)} buttonType={BUTTON_TYPE_CLASSES.small}>+</Button>
        <p>{productAmountInCart}</p>
      <Button onClick={() => decreaseProductAmount(id)} buttonType={BUTTON_TYPE_CLASSES.small}>-</Button>
    </CartProductContainer>
  );
};

export default CartProduct;
