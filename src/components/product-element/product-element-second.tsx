import { FC, useContext } from "react";
import { ProductElementContainer, DescriptionWrapper, PriceWrapper, DescriptionText, ImgWrapper, ProductLink } from "./product-element.styled";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/buttons";
import { IProducts } from "../../api/products";
import { ProductsContext } from "../../context/products-context";

const ProductElementSecond: FC<IProducts> = ({
  title,
  price,
  thumbnail,
  id,
  description,
  discountPercentage,
  brand
}) =>
{
  const { addProductIdToCart, dropProductFromCart, isProductInCart } = useContext(ProductsContext);
  return (
    <ProductElementContainer>
      <ProductLink to="/product-details">
        <PriceWrapper>
          <p>{title}</p>
          <p>{price}$</p>
        </PriceWrapper>
        <DescriptionWrapper>
            <ImgWrapper>
              <img
                src={thumbnail}
                alt=""
                id={String(id)}
              ></img>
            </ImgWrapper>
          <DescriptionText>
            {description}<br />
            <br />
            discount: {discountPercentage}%<br />
            brand: {brand}
          </DescriptionText>
        </DescriptionWrapper>
      </ProductLink>
      {isProductInCart(id)
        ? <Button onClick={() => id && dropProductFromCart(id)} buttonType={BUTTON_TYPE_CLASSES.base}>Drop from card</Button>
        : <Button onClick={() => id && addProductIdToCart(id)} buttonType={BUTTON_TYPE_CLASSES.base}>Add to card</Button>
      }
    </ProductElementContainer>
  );
};

export default ProductElementSecond;