import "./App.css";
import Right from "./components/right";
import { ScrollProvider } from "./context/ScrollContext"; // Import ScrollProvider
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <ScrollProvider>
        <div className="top"></div>
        <div className="main flex flex-col progress-bar">
          <Right />
        </div>
      </ScrollProvider>
      <Analytics />
    </>
  );
}

export default App;
