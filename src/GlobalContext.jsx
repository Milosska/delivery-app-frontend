import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('refresh_token'))
  );
  const [productsId, setProductsId] = useState([]);

  const logIn = (id, name, email, phone, address, token) => {
    setIsLoggedIn(true);
    setUserId(id);
    setName(name);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
    setToken(token);
    localStorage.setItem('refresh_token', JSON.stringify(token));
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setName(null);
    setEmail(null);
    setPhone(null);
    setAddress(null);
    setToken(null);
    localStorage.removeItem('refresh_token');
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        userId,
        name,
        email,
        phone,
        address,
        token,
        logIn,
        logOut,
        productsId,
        setProductsId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
