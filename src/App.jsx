import 'modern-normalize';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './GlobalStyles';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

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
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<GlobalLayout />}>
            <Route index element={<RestaurantsPage />} />
            <Route path="cart" element={<ShoppingCartPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="*" element={<RestaurantsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
