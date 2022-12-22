import { useContext, useState, useMemo, useEffect } from 'react';
import RangeSlider from '../../../../components/range-slider/range-slider';
import { ProductsContext } from '../../../../context/products-context';
import { useSearchParams, } from 'react-router-dom';

const FilterStock = () => {
  const [ , setSearchParams ] = useSearchParams();
  const { currentProducts, allProducts, usedFilter, updateUsedFilter } = useContext(ProductsContext);

  const [rangeStockMin, setRangeStockMin] = useState(0);
  const [rangeStockMax, setRangeStockMax] = useState(0);

  const minStock = useMemo(
    () => ([...allProducts].sort((a, b) => a.stock - b.stock))[0]?.stock ?? 0,
    [allProducts]);

  const maxStock = useMemo(
    () => ([...allProducts].sort((a, b) => a.stock - b.stock))[allProducts.length - 1]?.stock ?? 0,
    [allProducts]);

  useEffect(() => {
    if (usedFilter !== 'stock' || !rangeStockMin) {
      const min = [...currentProducts].sort((a, b) => a.stock - b.stock)[0]?.stock ?? 0;
      setRangeStockMin(min);
    }

    if (usedFilter !== 'stock' || !rangeStockMax) {
      const max = [...currentProducts].sort((a, b) => a.stock - b.stock)[currentProducts.length - 1]?.stock ?? 0;
      setRangeStockMax(max);
    }

  }, [currentProducts, usedFilter, rangeStockMin]);

  const changeStockFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeStockMin(Number(e.target.value));
    setSearchParams({stock: [e.target.value, String(rangeStockMax)]});
    updateUsedFilter('stock');
  }

  const changeStockSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeStockMax(Number(e.target.value));
    setSearchParams({stock: [String(rangeStockMin), e.target.value]});
    updateUsedFilter('stock');
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