import { Navigate } from 'react-router-dom';
import { useGlobal } from '../../GlobalContext';

export const PrivateRoute = ({ component }) => {
  const { isLoggedIn } = useGlobal();

  return isLoggedIn ? component : <Navigate to="/login" replace />;
};
