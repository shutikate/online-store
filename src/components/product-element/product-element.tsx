import { FC } from "react";
import { ProductElementContainer } from "./product-element.styled";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/buttons";
import { IProducts } from "../../api/products";
// import { ProductsContext } from "../../context/productsContext";

const ProductElement: FC<Partial<IProducts>> = ({
  title,
  price,
  thumbnail,
  id,
}) =>
{
  // const { addProductIdToCart } = useContext(ProductsContext);
  // const addId = (id: number) => {
  //   if(id) {
  //     addProductIdToCart(id);
  //   }
  // }
  return (
    <ProductElementContainer>
      <div>
        <p>{title}</p>
        <p>{price}$</p>
      </div>
      <img
        onClick={(e) => {
          console.log(e.target);
        }}
        src={thumbnail}
        alt=""
        id={String(id)}
      ></img>
      <Button buttonType={BUTTON_TYPE_CLASSES.base}>Add to card</Button>
    </ProductElementContainer>
  );
};

export default ProductElement;
