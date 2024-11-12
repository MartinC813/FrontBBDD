import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useApi from '../hook/useApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { doRequest } = useApi();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  const login = async (email, password) => {
    try {
        const response = await doRequest(
            "auth/login",
            "POST",
            { email, password },
            false
        );
          
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      toast.error(JSON.parse(error.request.response).message);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};