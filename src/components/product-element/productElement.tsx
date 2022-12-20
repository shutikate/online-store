import { FC, useContext } from 'react';
import { ProductElementContainer } from "./productElement.styled";
import Button from "../buttons/button";
import { IProducts } from '../../api/products';
import { ProductsContext } from '../../context/productsContext';

const ProductElement: FC<IProducts> = ({title, price, thumbnail, id}) => {

  const { addProductIdToCart } = useContext(ProductsContext);

  const addId = () => {
    addProductIdToCart(id);
  }

  return (
    <ProductElementContainer>
      <div>
        <p>{title}</p>
        <p>{price}$</p>
      </div>
      <img src= {thumbnail} alt="" id={String(id)}></img>
      <Button onClick={addId} text='ADD TO CART'/>
    </ProductElementContainer>
  );
};

export default ProductElement;
