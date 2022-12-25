import { useSearchParams, } from "react-router-dom";
import { useContext, useMemo } from "react";
import { ProductsContext } from "../../../../context/products-context";
import { Wrapper, Input, Label, NumberOfProducts } from "./checkbox.styled";
import { IProducts } from "../../../../api/products";

export const getBrandsWithNums = (products: IProducts[]) =>
  products.reduce<Record<string, number>>((acc, product) => {
    const brand = product.brand.toLowerCase();
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {});

const FilterBrands = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const { currentProducts } = useContext(ProductsContext);
  const { allProducts } = useContext(ProductsContext);

  const allBrands = useMemo(
    () => getBrandsWithNums(allProducts),
    [allProducts]
  );

  const currentBrands = useMemo(
    () => getBrandsWithNums(currentProducts),
    [currentProducts]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentParams = searchParams.get('brand')?.split('↕') ?? [];
    const current = event.target.id;
    const changedParams = currentParams.includes(current)
      ? currentParams.filter(param => param !== current)
      : currentParams.concat(current);
    changedParams.length === 0
      ? searchParams.delete('brand')
      : searchParams.set('brand', changedParams.join('↕'));
    setSearchParams(searchParams);
  };

  return (
    <>
      {
        Object.entries(allBrands).map(([key,value]) =>
          <Wrapper key={key}>
           <Input type="checkbox" id={key} checked={searchParams.get('brand')?.includes(key) ?? false} onChange={handleChange}></Input>
           <Label htmlFor={key}>{key}</Label>
           <NumberOfProducts>
             <span>{currentBrands[key] ? currentBrands[key] : 0}</span>
             <span>/</span>
             <span>{value}</span>
           </NumberOfProducts>
         </Wrapper>
        )
      }
    </>
  )
}

export default FilterBrands;