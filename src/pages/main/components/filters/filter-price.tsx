import { useContext, useState, useMemo, useEffect } from 'react';
import RangeSlider from '../../../../components/range-slider/range-slider';
import { ProductsContext } from '../../../../context/products-context';
import { useSearchParams } from 'react-router-dom';

const FilterPrice = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const { currentProducts } = useContext(ProductsContext);
  const { allProducts, usedFilter, updateUsedFilter } = useContext(ProductsContext);

  const [rangePriceMin, setRangePriceMin] = useState(0);
  const [rangePriceMax, setRangePriceMax] = useState(0);

  const minPrice = useMemo(
    () => ([...allProducts].sort((a, b) => a.price - b.price))[0]?.price ?? 0,
    [allProducts]);

  const maxPrice = useMemo(
    () => ([...allProducts].sort((a, b) => a.price - b.price))[allProducts.length - 1]?.price ?? 0,
    [allProducts]);

  useEffect(() => {
    if (usedFilter !== 'price' || !rangePriceMin) {
      const min = [...currentProducts].sort((a, b) => a.price - b.price)[0]?.price ?? 0;
      setRangePriceMin(min);
    }

    if (usedFilter !== 'price' || !rangePriceMax) {
      const max = [...currentProducts].sort((a, b) => a.price - b.price)[currentProducts.length - 1]?.price ?? 0;
      setRangePriceMax(max);
    }

  }, [currentProducts]);

  const changePriceFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangePriceMin(Number(event.target.value));
    updateUsedFilter('price');
    searchParams.set('price', (Number(event.target.value) < rangePriceMax) ?
                    `${Number(event.target.value)}` + '↕' + `${rangePriceMax}`:
                    `${rangePriceMax}` + '↕' + `${Number(event.target.value)}`);
    setSearchParams(searchParams);
  }

  const changePriceSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangePriceMax(Number(event.target.value));
    updateUsedFilter('price');
    searchParams.set('price', (Number(event.target.value) > rangePriceMin) ?
                      `${rangePriceMin}` + '↕' + `${Number(event.target.value)}`:
                      `${Number(event.target.value)}` + '↕' + `${rangePriceMin}`);
    setSearchParams(searchParams);
  }

  return (
    <RangeSlider
        valueMin={minPrice}
        valueMax={maxPrice}
        rangePriceMin={rangePriceMin < rangePriceMax ? rangePriceMin : rangePriceMax}
        rangePriceMax={rangePriceMin < rangePriceMax ? rangePriceMax : rangePriceMin}
        onChangeFirst={changePriceFirst}
        onChangeSecond= {changePriceSecond}
      />
  )
}

export default FilterPrice;