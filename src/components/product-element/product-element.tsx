import { FC, useContext } from "react";
import { ProductElementContainer, PriceWrapper, ProductLink } from "./product-element.styled";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/buttons";
import { IProducts } from "../../api/products";
import { ProductsContext } from "../../context/products-context";

const ProductElement: FC<Partial<IProducts>> = ({
  title,
  price,
  thumbnail,
  id,
}) =>
{
  const { addProductIdToCart, dropProductFromCart, isProductInCart } = useContext(ProductsContext);
  return (
    <ProductElementContainer>
      <ProductLink to={`/product-details/${id}`}>
        <PriceWrapper>
          <p>{title}</p>
          <p>{price}$</p>
        </PriceWrapper>
          <img
            src={thumbnail}
            alt=""
            id={String(id)}
          ></img>
      </ProductLink>
      {isProductInCart(id)
        ? <Button onClick={() => id && dropProductFromCart(id)} buttonType={BUTTON_TYPE_CLASSES.base}>Drop from card</Button>
        : <Button onClick={() => id && addProductIdToCart(id)} buttonType={BUTTON_TYPE_CLASSES.base}>Add to card</Button>
      }
    </ProductElementContainer>
  );
};

export default ProductElement;
