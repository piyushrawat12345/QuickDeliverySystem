import { createContext,useContext, useState, useEffect } from "react";

// ! create authStore
const authStore = createContext();

// ! Auth Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) 
    {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <authStore.Provider
      value={{
        user,
        isAuthenticate: !!user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </authStore.Provider>
  );
};


//! Custom Hook vs Normal js function
export const useAuth = () => {
  const context = useContext(authStore);
  if(!context)
  {
    throw new Error("useAuth must be used inside auth provider");
  }
  return context;
}

