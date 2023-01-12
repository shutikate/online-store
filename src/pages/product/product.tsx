import { useMemo, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../context/products-context';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/buttons/buttons';
import { useNavigate } from "react-router-dom";
import {
  ProductDescriptionWrapper,
  NameProductWrapper,
  StoreLink,
  Name,
  ProductWrapper,
  ImageWrapper,
  AllImages,
  BigImage,
  DescriptionWrapper,
  NameBlock,
  DescriptionBlock,
  PriceWrapper,
  Price,
  EmptyProduct
} from "./product.styled";

const DescriptionCard = () => {

  const { id } = useParams();
  const { allProducts, addProductIdToCart, dropProductFromCart, isProductInCart } = useContext(ProductsContext);
  const navigate = useNavigate();

  const product = useMemo(() => allProducts.find((product) => product?.id === Number(id)), [allProducts, id]);
  const [currentImage, setCurrentImage] = useState(product?.images[0]);

  useEffect (() => {
    setCurrentImage(product?.images[0]);
    }, [product]);

  const openBigImg = (event: React.MouseEvent<HTMLImageElement> & {target: HTMLImageElement}) => {
    setCurrentImage(event.target.src);
  }

  const redirectToShopCart = () => {
    navigate('/shopcart?isBuyNowOpened=true');
    addProductIdToCart(Number(id));
  }

  return (
    <>
    {
      product
      ?
      <>
        <NameProductWrapper>
          <StoreLink to="/">Store</StoreLink>
          <span>{">>"}</span>
          <span>{product?.category}</span>
          <span>{">>"}</span>
          <span>{product?.brand}</span>
          <span>{">>"}</span>
          <span>{product?.title}</span>
        </NameProductWrapper>
        <Name>{product?.title}</Name>
        <ProductDescriptionWrapper>
          <ProductWrapper>
            <ImageWrapper>
              <AllImages>
                {product?.images.map((product, index) =>
                  <img src={product} key={String(index)} onClick={openBigImg}></img>
                )}
              </AllImages>
              <BigImage>
                <img src={currentImage}></img>
              </BigImage>
            </ImageWrapper>
            <DescriptionWrapper>
              <NameBlock>Description:</NameBlock>
              <DescriptionBlock>{product?.description}</DescriptionBlock>
              <NameBlock>Discount Percentage:</NameBlock>
              <DescriptionBlock>{product?.discountPercentage}</DescriptionBlock>
              <NameBlock>Rating:</NameBlock>
              <DescriptionBlock>{product?.rating}</DescriptionBlock>
              <NameBlock>Stock:</NameBlock>
              <DescriptionBlock>{product?.stock}</DescriptionBlock>
              <NameBlock>Brand:</NameBlock>
              <DescriptionBlock>{product?.brand}</DescriptionBlock>
              <NameBlock>Category:</NameBlock>
              <DescriptionBlock>{product?.category}</DescriptionBlock>
            </DescriptionWrapper>
            <PriceWrapper>
              <Price>
                <span>$</span>
                <span>{product?.price}</span>
              </Price>
              {isProductInCart(Number(id))
                ? <Button onClick={() => id && dropProductFromCart(Number(id))} buttonType={BUTTON_TYPE_CLASSES.base}>Drop from card</Button>
                : <Button onClick={() => id && addProductIdToCart(Number(id))} buttonType={BUTTON_TYPE_CLASSES.base}>Add to card</Button>
              }
              <Button onClick={redirectToShopCart}>Buy now</Button>
            </PriceWrapper>
          </ProductWrapper>
        </ProductDescriptionWrapper>
      </>
    : <EmptyProduct>Product not found</EmptyProduct>
    }
    </>
  )
};

export default DescriptionCard;
