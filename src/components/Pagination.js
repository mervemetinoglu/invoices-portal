import '../styles/components/_pagination.scss';
import {usePagination, DOTS} from '../hooks/usePagination';

const Pagination = (props) => {
  const {onPageChange, currentPage, totalPages} = props;

  const paginationRange = usePagination({
    currentPage,
    totalPages,
  });

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => onPageChange(currentPage + 1);

  const onPrevious = () => onPageChange(currentPage - 1);

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination__container">
      <li
        className="pagination__item"
        onClick={() => currentPage !== 1 && onPrevious()}
      >
        <div
          className={`arrow left ${currentPage === 1 ? 'disabled' : ' '}`}
        ></div>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={`pagination__item ${
              pageNumber === currentPage ? 'selected ' : ''
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className="pagination__item"
        onClick={() => currentPage !== lastPage && onNext()}
      >
        <div
          className={`arrow right ${
            currentPage === lastPage ? 'disabled' : ''
          }`}
        ></div>
      </li>
    </ul>
  );
};

export default Pagination;
