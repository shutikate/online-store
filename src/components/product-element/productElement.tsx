import { FC } from 'react';
import { ProductElementContainer } from "./productElement.styled";
import Button from "../buttons/button";
import { IProducts } from '../../api/products';

const ProductElement: FC<Partial<IProducts>> = ({title, price, thumbnail, id}) => {

  return (
    <ProductElementContainer>
      <div>
        <p>{title}</p>
        <p>{price}$</p>
      </div>
      <img src= {thumbnail} alt="" id={String(id)}></img>
      <Button text='ADD TO CART'/>
    </ProductElementContainer>
  );
};

export default ProductElement;
