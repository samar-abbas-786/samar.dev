import { createContext, useState } from "react";

// Create a new context object
export const GlobalContext = createContext(null);

// Define a provider component
export  function GlobalState({ children }) {
  // Initialize state with useState hook
  const [menu, setMenu] = useState("Home");

  return (
    // Use the Provider to pass the current state and setter function down to the component tree
    <GlobalContext.Provider value={{ menu, setMenu }}>
      {children}
    </GlobalContext.Provider>
  );
}
