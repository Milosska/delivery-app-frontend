import 'modern-normalize';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './GlobalStyles';

import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { fetchCurrentUser } from './helpers/fetchAPI';
import { useGlobal } from './GlobalContext';

import { RestrictedRoute } from './components/Routes/RestrictedRoute';
import { PrivateRoute } from './components/Routes/PrivateRoute';
import { Loader } from './components/Loader/Loader';

import GlobalLayout from './components/GlobalLayout/GlobalLayout';
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const RestaurantsPage = lazy(() =>
  import('./pages/RestautantsPage/RestautantsPage')
);
const ShoppingCartPage = lazy(() =>
  import('./pages/ShoppingCartPage/ShoppingCartPage')
);
const OrdersPage = lazy(() => import('./pages/OrdersPage/OrdersPage'));

export const App = () => {
  const [isRefreshingUser, setIsRefreshingUser] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(
    JSON.parse(localStorage.getItem('current_order')) || []
  );

  console.log(currentOrder);

  const { token, logIn } = useGlobal();

  useEffect(() => {
    const refreshUser = async () => {
      if (token) {
        setIsRefreshingUser(true);
        const { _id, name, email, phone, address, refresh_token } =
          await fetchCurrentUser(token);
        logIn(_id, name, email, phone, address, refresh_token);
        setIsRefreshingUser(false);
      } else {
        return <Navigate to="/login" replace />;
      }
    };

    refreshUser();
  }, [token, logIn]);

  useEffect(() => {
    localStorage.setItem('current_order', JSON.stringify(currentOrder));
  }, [currentOrder]);

  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        {!isRefreshingUser && (
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route
                index
                element={
                  <PrivateRoute
                    component={
                      <RestaurantsPage
                        currentOrder={currentOrder}
                        setCurrentOrder={setCurrentOrder}
                      />
                    }
                  />
                }
              />
              <Route
                path="cart"
                element={
                  <PrivateRoute
                    component={<ShoppingCartPage currentOrder={currentOrder} />}
                  />
                }
              />
              <Route
                path="orders"
                element={<PrivateRoute component={<OrdersPage />} />}
              />
              <Route
                path="login"
                element={<RestrictedRoute component={<LoginPage />} />}
              />
              <Route
                path="register"
                element={<RestrictedRoute component={<RegistrationPage />} />}
              />
              <Route path="*" element={<RestaurantsPage />} />
            </Route>
          </Routes>
        )}
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
