import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);

  const logIn = (name, email, phone, address) => {
    setIsLoggedIn(true);
    setName(name);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setName(null);
    setEmail(null);
    setPhone(null);
    setAddress(null);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, name, email, phone, address, logIn, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
