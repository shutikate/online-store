import { FC } from 'react';
import { ProductElementContainer } from "./product-element.styles";
import ButtonComponent from "../buttons/button.component";
import { IProducts } from '../../api/products';

const ProductElement: FC<Partial<IProducts>> = ({title, price, thumbnail, id}) => {

  return (
    <ProductElementContainer>
      <div>
        <p>{title}</p>
        <p>{price}$</p>
      </div>
      <img onClick={(e) => {
        console.log(e.target);
      }}src= {thumbnail} alt="" id={String(id)}></img>
      <ButtonComponent />
    </ProductElementContainer>
  );
};

export default ProductElement;
