import '../styles/pages/_billPage.scss';
import useValues from '../hooks/useValues';
import Header from '../components/Header';
import Table from '../components/Table/Table';
import Spinner from '../components/Spinner';
import DateComponent from '../components/DateComponent';

const Bill = () => {
  const [values, pageable, params, setParams, INITIAL_PARAMS] = useValues();

  return (
    <div className="bill__container">
      <Header />
      <DateComponent
        params={params}
        setParams={setParams}
        pageable={pageable}
        initialParams={INITIAL_PARAMS}
      />
      {values ? (
        <Table
          values={values}
          pageable={pageable}
          params={params}
          setParams={setParams}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Bill;
