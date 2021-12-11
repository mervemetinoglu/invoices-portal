import {Navigate, useLocation} from 'react-router-dom';
import useAuth from '../auth/useAuth';

const PrivateRoute = ({children}) => {
  const authContext = useAuth();
  let location = useLocation();

  return authContext.isAuthed ? (
    children
  ) : (
    <Navigate to="/" state={{from: location}} />
  );
};

export default PrivateRoute;
