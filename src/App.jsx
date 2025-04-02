import "./App.css";
import Sidesection from "./components/sideSection";
import Right from "./components/right";
import { ScrollProvider } from "./context/ScrollContext"; // Import ScrollProvider
import { useState } from "react";

function App() {
  function github() {
    window.open("https://github.com/samar-abbas-786/", "_blank");
  }

  function link() {
    window.open("http://www.linkedin.com/in/samar-abbas-a1ab4625a", "_blank");
  }

  function insta() {
    window.open("https://www.instagram.com/samar_abbas_786/", "_blank");
  }

  function fb() {
    window.open("https://www.facebook.com/samar.naqvi.568", "_blank");
  }

  function twitter() {
    window.open("https://twitter.com/SamarAb65178114", "_blank");
  }

  const [selected, setSelected] = useState("Home");

  return (
    <ScrollProvider>
      <div className="top"></div>
      <div className="main flex justify-between progress-bar">
        <Sidesection
          selected={selected}
          setSelected={setSelected}
          fb={fb}
          insta={insta}
          github={github}
          twitter={twitter}
          link={link}
        />
        <Right github={github} />
      </div>
    </ScrollProvider>
  );
}

export default App;
