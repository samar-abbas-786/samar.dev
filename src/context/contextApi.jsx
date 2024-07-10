import { createContext, useState } from "react";

// Create a new context object
export const GlobalContext = createContext(null);

// Define a provider component
export function GlobalState({ children }) {
  // Initialize state with useState hook
  const [menu, setMenu] = useState("Home");
  const [hide, Sethide] = useState(true);

    function handleSidebar() {
    try {
        console.log("clicked")
      Sethide(!hide);
    } catch (e) {
      console.log("Error Occured", e);
    }
  }

  return (
    // Use the Provider to pass the current state and setter function down to the component tree
    <GlobalContext.Provider
      value={{ menu, setMenu, hide, Sethide, handleSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
