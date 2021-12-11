import {createContext, useState} from 'react';
import API from '../services/izibiz.instance';
import {setAuthToken} from '../helpers/authToken';
import displayToastMessage from '../helpers/displayToastMessage';
import {useTranslation} from 'react-i18next';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [isAuthed, setIsAuthed] = useState(false);
  const {t} = useTranslation();

  const login = (formData, callback) => {
    const data = API.post('/auth/token', formData)
      .then((response) => {
        if (response.data.data.accessToken) {
          setIsAuthed(true);
          setAuthToken(response.data.data.accessToken);
          callback();
        }
      })
      .catch((error) => {
        displayToastMessage(t('toastErrorMessage'));
      });
  };

  const values = {isAuthed, login};

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
