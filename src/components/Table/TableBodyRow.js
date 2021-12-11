import {ReactComponent as FileIcon} from '../../assets/file-icon.svg';
import API from '../../services/izibiz.instance';


const TableBodyRow = ({values}) => {
  const handleClick = (id) => {
    
    // API.get(`/einvoices/inbox/${id}/html`).then(res => console.log(res)).catch(err => console.log(err));
  };

  return (
    <>
      {values.map((value) => (
        <tr key={value.id}>
          <td>
            <button onClick={() => handleClick(value.id)}>
              <FileIcon />
            </button>
          </td>
          <td>{value.id}</td>
          <td>{value.documentNo}</td>
          <td>{value.issueDate}</td>
          <td>{value.profile}</td>
          <td>
            {value.amount} {value.currency}
          </td>
          <td>{value.accountingSupplier.identifier}</td>
          <td>{value.accountingSupplier.name}</td>
          <td>{value.documentStatus.value}</td>
        </tr>
      ))}
    </>
  );
};

export default TableBodyRow;
