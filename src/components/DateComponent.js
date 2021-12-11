import 'react-datepicker/dist/react-datepicker.css';
import '../styles/components/_datePicker.scss';
import {ReactComponent as CalendarIcon} from '../assets/calendar-icon.svg';
import {useState} from 'react';
import DatePicker from 'react-datepicker';
import {format} from 'date-fns';
import useDate from '../hooks/useDate';
import {useTranslation} from 'react-i18next';
import {tr, enGB} from 'date-fns/locale';
import {currentLang} from '../helpers/getCurrentLanguage';

const DateComponent = ({params, setParams, pageable, initialParams}) => {
  const [startDate, endDate, setDateRange, onChange] = useDate();
  const [isFilter, setIsFilter] = useState(false);

  const {t} = useTranslation();

  const handleFilter = () => {
    setIsFilter(true);
    setParams({
      ...params,
      dateType: 'DELIVERY',
      startDate: format(startDate, 'yyyy-MM-dd'),
      endDate: format(endDate, 'yyyy-MM-dd'),
      sortProperty: 'createDate',
    });
  };

  const handleClear = () => {
    setIsFilter(false);
    setDateRange([null, null]);
    setParams({...initialParams, pageSize: pageable.size});
  };

  return (
    <div className="date_picker__wrapper">
      <span>
        <CalendarIcon />
      </span>
      <DatePicker
        placeholderText={t('datePicker')}
        dateFormat="yyyy/MM/dd"
        closeOnScroll={true}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        locale={currentLang === 'tr' ? tr : enGB}
      />
      <div>
        <button className="datePicker__btn" onClick={handleFilter}>
          {t('filter')}
        </button>
        {isFilter && (
          <button className="datePicker__btn-clear" onClick={handleClear}>
            {t('clear')}
          </button>
        )}
      </div>
    </div>
  );
};

export default DateComponent;
