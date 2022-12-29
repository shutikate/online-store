import { useMemo } from 'react';
import { useSearchParams, } from 'react-router-dom';

const getLastPage = (itemsLength: number, limit: number) => Math.ceil(itemsLength / limit);

export const usePagination = <T>(input: T[]) => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const limit = Number(searchParams.get('limit')) || 3;
  const page = Number(searchParams.get('page')) || 1;

  const currentItems = useMemo(() => input.slice(page - 1, page - 1 + limit), [input, limit, page]);

  const updatePage = (newPage: number) => {
    searchParams.set('page', String(newPage));
    setSearchParams(searchParams);
  };

  const updateLimit = (newLimit: number) => {
    const lastPage = getLastPage(input.length, newLimit);
    if (lastPage < page) {
      updatePage(lastPage);
    }
    console.log(newLimit);
    searchParams.set('limit', String(newLimit));
    setSearchParams(searchParams);
  };

  const goPrevPage = () => {
    updatePage(page - 1);
  }

  const goNextPage = () => {
    updatePage(page + 1);
  }

  return {
    limit,
    page,
    currentItems,
    updateLimit,
    goPrevPage,
    goNextPage,
    lastPage: getLastPage(input.length, limit),
  };
}