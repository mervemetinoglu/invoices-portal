import {useTranslation} from 'react-i18next';
import columnNames from '../../constants/columnNames';

const TableHeadRow = () => {
  const {t} = useTranslation();
  return (
    <tr>
      <th></th>
      {columnNames.map((value, index) => {
        return <th key={index}>{t(value)}</th>;
      })}
    </tr>
  );
};

export default TableHeadRow;
