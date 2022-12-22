import { useContext, useState, useMemo, useEffect } from 'react';
import RangeSlider from '../../../../components/range-slider/range-slider';
import { ProductsContext } from '../../../../context/products-context';
import { useSearchParams, } from 'react-router-dom';

const FilterStock = () => {
  const [ , setSearchParams ] = useSearchParams();
  const { currentProducts } = useContext(ProductsContext);
  const { allProducts } = useContext(ProductsContext);

  const [rangeStockMin, setRangeStockMin] = useState(0);
  const [rangeStockMax, setRangeStockMax] = useState(0);

  const minStock = useMemo(
    () => ([...allProducts].sort((a, b) => a.stock - b.stock))[0]?.stock ?? 0,
    [allProducts]);

  const maxStock = useMemo(
    () => ([...allProducts].sort((a, b) => a.stock - b.stock))[allProducts.length - 1]?.stock ?? 0,
    [allProducts]);

  useEffect(() => {
      const min = [...currentProducts].sort((a, b) => a.stock - b.stock)[0]?.stock ?? 0;
      setRangeStockMin(min);

      const max = [...currentProducts].sort((a, b) => a.stock - b.stock)[currentProducts.length - 1]?.stock ?? 0;
      setRangeStockMax(max);

  }, [currentProducts]);

  const changeStockFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeStockMin(Number(e.target.value));
    setSearchParams({stock: [e.target.value, String(rangeStockMax)]});
  }

  const changeStockSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeStockMax(Number(e.target.value));
    setSearchParams({stock: [String(rangeStockMin), e.target.value]});
  }

  return (
    <RangeSlider
        valueMin={minStock}
        valueMax={maxStock}
        rangePriceMin={rangeStockMin}
        rangePriceMax={rangeStockMax}
        onChangeFirst={changeStockFirst}
        onChangeSecond= {changeStockSecond}
      />
  )
}

export default FilterStock;