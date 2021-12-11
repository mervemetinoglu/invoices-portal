import '../styles/pages/_notFound.scss';
import {useTranslation} from 'react-i18next';

const NotFound = () => {
  const {t} = useTranslation();
  return (
    <div className="not-found__container">
      <div className="not-found__content">
        <div className="not-found__msg">
          <div>404</div>
          <div>{t('404Error')}</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
