import {useMemo} from 'react';

const DOTS = '...';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({length}, (_, index) => start + index);
};

const usePagination = ({currentPage, totalPages = 2}) => {
  const paginationRange = useMemo(() => {
    const paginationItemsCount = 6;

    if (paginationItemsCount >= totalPages) {
      return range(1, totalPages);
    }

    const shouldShowLeftDots = currentPage > 3;
    const shouldShowRightDots = currentPage < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 5);
      return [...leftRange, DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - 5 + 1, totalPages);
      return [1, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(currentPage - 1, currentPage + 1);
      return [1, DOTS, ...middleRange, DOTS, totalPages];
    }
    return null;
  }, [currentPage, totalPages]);

  return paginationRange;
};

export {usePagination, DOTS};
