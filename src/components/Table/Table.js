import '../../styles/components/_table.scss';
import {useState} from 'react';
import TableHeadRow from './TableHeadRow';
import TableBodyRow from './TableBodyRow';
import Pagination from '../Pagination';

const Table = ({values, pageable, params, setParams}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    setCurrentPage(page);
    setParams({...params, page: page - 1});
  };

  return (
    <div className="table__wrapper">
      <table>
        <thead>
          <TableHeadRow />
        </thead>
        <tbody>
          <TableBodyRow values={values} />
        </tbody>
      </table>
      <div className="pagination__wrapper">
        <Pagination
          currentPage={currentPage}
          totalPages={pageable.totalPages}
          onPageChange={(page) => changePage(page)}
        />
      </div>
    </div>
  );
};

export default Table;
