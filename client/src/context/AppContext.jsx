import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

AppProvider.propTypes = {
	children: PropTypes.node
}

export function AppProvider({ children }) {
  const [apiUrl, setApiUrl] = useState(
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_BACKEND_URL
      : "http://localhost:8080",
  );

  return (
    <AppContext.Provider value={{ apiUrl, setApiUrl }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
