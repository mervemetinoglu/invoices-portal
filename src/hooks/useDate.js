import {useState} from 'react';

const useDate = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const onChange = (dates) => {
    setDateRange(dates);
  };

  return [startDate, endDate, setDateRange, onChange];
};

export default useDate;
