import '../styles/components/_dropdown.scss';
import {ReactComponent as GlobeIcon} from '../assets/globe-icon.svg';
import {useState, useEffect, useRef} from 'react';
import languages from '../localization/languages';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';

const DropDown = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();
  const {t} = useTranslation();

  const handleClick = (item) => {
    i18next.changeLanguage(item);
  };

  useEffect(() => {
    const checkClickedOutside = (event) => {
      if (isActive && ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('mousedown', checkClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkClickedOutside);
    };
  }, [isActive]);

  return (
    <div
      className="dropdown__container"
      ref={ref}
      onClick={() => setIsActive((prevState) => !prevState)}
    >
      <div className="dropdown__btn">
        <GlobeIcon /> <span> {t('language')}</span>
      </div>
      {isActive && (
        <div className="dropdown__content">
          {languages.map(({code, countryCode}) => (
            <div
              key={countryCode}
              className="dropdown__item"
              onClick={() => handleClick(code)}
            >
              {t(code)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
