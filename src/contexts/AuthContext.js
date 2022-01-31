import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("refreshToken"));
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
