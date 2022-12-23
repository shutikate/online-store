// import { useSearchParams, } from "react-router-dom";
import { useContext, useMemo } from "react";
import { ProductsContext } from "../../../../context/products-context";
import { Wrapper, Input, Label, NumberOfProducts } from "./checkbox.styled";

const makeUnique = (paramsKeys: string[]) =>
  paramsKeys.filter((param, index, arr) => arr.indexOf(param) === index);

const FilterBrands = () => {
  // const [ , setSearchParams ] = useSearchParams();
  // const { currentProducts } = useContext(ProductsContext);
  const { allProducts } = useContext(ProductsContext);

  console.log(allProducts);

  const BrandsOfProducts = useMemo(
    () => makeUnique(allProducts.map((product) => product?.brand ?? [])),
    [allProducts]
  );

  return (
    <>
      {
          BrandsOfProducts.map((brand) =>
            <Wrapper key={brand}>
              <Input type="checkbox" id={brand}></Input>
              <Label htmlFor={brand}>{brand}</Label>
              <NumberOfProducts>
                <span>5</span>
                <span>/</span>
                <span>5</span>
              </NumberOfProducts>
            </Wrapper>
          )
      }
    </>
  )
}

export default FilterBrands;