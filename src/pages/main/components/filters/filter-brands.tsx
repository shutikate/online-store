import { useSearchParams, } from "react-router-dom";
import { useContext, useState, useMemo, useEffect } from "react";
import { ProductsContext } from "../../../../context/products-context";
import { BrandsWrapper } from "./filter-brands.styled";
import { makeUnique } from "../../../../hooks/use-filters";
import ProductElement from "../../../../components/product-element/product-element";

const FilterBrands = () => {
  const [ , setSearchParams ] = useSearchParams();
  const { currentProducts } = useContext(ProductsContext);
  const { allProducts } = useContext(ProductsContext);

  const BrandsOfProducts = useMemo(
    () => makeUnique(allProducts.map((product) => product?.brand ?? [])),
    [allProducts]);

    console.log(BrandsOfProducts);

return (
  <>
    {
        BrandsOfProducts.map((brand) =>
          <div key={brand}>
            <input type="checkbox" id={brand}></input>
            <label htmlFor={brand}>{brand}</label>
          </div>
        )
    }
  </>
)
}

export default FilterBrands;