import { Navigate } from 'react-router-dom';
import { useGlobal } from '../../GlobalContext';

export const RestrictedRoute = ({ component }) => {
  const { isLoggedIn } = useGlobal();

  return isLoggedIn ? <Navigate to="/" replace /> : component;
};
