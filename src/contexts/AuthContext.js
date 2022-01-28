import { createContext, useState } from "react";

export const AuthContext = createContext({
  state: { isLogin: false },
  actions: {
    setIsLogin: () => {},
  },
});

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const setIsLoginHandler = (isLogin) => setIsLogin(isLogin);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLoginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
