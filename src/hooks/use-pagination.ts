import { useMemo, useEffect } from 'react';
import { useSearchParams, } from 'react-router-dom';

export const getLastPage = (itemsLength: number, limit: number) => Math.ceil(itemsLength / limit);

export const usePagination = <T>(input: T[], defaultLimit: number) => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const limit = Number(searchParams.get('limit')) || defaultLimit;
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const lastPage = getLastPage(input.length, limit);
    if (lastPage < page) {
      updatePage(lastPage);
    }
  }, [input, limit]);

  const currentItems = useMemo(() => input.slice((page - 1) * limit, (page - 1) * limit + limit), [input, limit, page]);

  const updatePage = (newPage: number) => {
    searchParams.set('page', String(newPage));
    setSearchParams(searchParams);
  };

  const updateLimit = (newLimit: number) => {
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