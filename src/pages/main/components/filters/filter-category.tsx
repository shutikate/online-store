import { useSearchParams, } from "react-router-dom";
import { useContext, useMemo } from "react";
import { ProductsContext } from "../../../../context/products-context";
import { Wrapper, Input, Label, NumberOfProducts } from "./checkbox.styled";
import { IProducts } from "../../../../api/products";

export const getCategoriesWithNums = (products: IProducts[]) =>
  products.reduce<Record<string, number>>((acc, product) => {
    const category = product.category.toLowerCase();
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

const FilterCategory = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const { currentProducts } = useContext(ProductsContext);
  const { allProducts } = useContext(ProductsContext);

  const allCategories = useMemo(
    () => getCategoriesWithNums(allProducts),
    [allProducts]
  );

  const currentCategories = useMemo(
    () => getCategoriesWithNums(currentProducts),
    [currentProducts]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentParams = searchParams.get('category')?.split('↕') ?? [];
    const current = event.target.id;
    const changedParams = currentParams.includes(current)
      ? currentParams.filter(param => param !== current)
      : currentParams.concat(current);
    changedParams.length === 0
      ? searchParams.delete('category')
      : searchParams.set('category', changedParams.join('↕'));
    setSearchParams(searchParams);
  };

  return (
    <>
      {
        Object.entries(allCategories).map(([key,value]) =>
          <Wrapper key={key}>
           <Input type="checkbox" id={key} checked={searchParams.get('category')?.includes(key) ?? false} onChange={handleChange}></Input>
           <Label htmlFor={key}>{key}</Label>
           <NumberOfProducts>
             <span>{currentCategories[key] ? currentCategories[key] : 0}</span>
             <span>/</span>
             <span>{value}</span>
           </NumberOfProducts>
         </Wrapper>
        )
      }
    </>
  )
}

export default FilterCategory;