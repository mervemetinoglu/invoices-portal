import '../styles/components/_form.scss';
import {useTranslation} from 'react-i18next';
import {useNavigate, useLocation} from 'react-router-dom';
import useForm from '../hooks/useForm';
import useAuth from '../auth/useAuth';

const Form = () => {
  const [values, onChange] = useForm({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  let location = useLocation();
  const authContext = useAuth();
  const {t} = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    authContext.login(values, () => {
      navigate('/bills', {from: location});
    });
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder={t('username')}
          value={values.username}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder={t('password')}
          value={values.password}
          onChange={onChange}
        />
        <button type="submit">{t('login')}</button>
      </form>
    </div>
  );
};

export default Form;
