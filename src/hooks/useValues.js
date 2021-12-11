import {useState, useEffect} from 'react';
import API from '../services/izibiz.instance';
import displayToastMessage from '../helpers/displayToastMessage';

const INITIAL_PARAMS = {
  page: 0,
  pageSize: 20,
  sort: 'asc',
  sortProperty: 'issueDate',
};

const useValues = () => {
  const [values, setValues] = useState([]);
  const [pageable, setPageable] = useState({});

  const [params, setParams] = useState(INITIAL_PARAMS);

  useEffect(() => {
    API.get(`/einvoices/inbox?`, {
      params: params,
    })
      .then((response) => {
        setValues(response.data.data.contents);
        setPageable(response.data.data.pageable);
      })
      .catch((error) => displayToastMessage('Error!'));
  }, [params]);

  return [values, pageable, params, setParams, INITIAL_PARAMS];
};

export default useValues;
