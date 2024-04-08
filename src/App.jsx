import "./App.css";
import Sidesection from "./components/sideSection";
import Right from "./components/right";
function App() {
  function github() {
    const link = "https://github.com/samar-abbas-786/";
    window.open(link, "_blank");
  }

  function link() {
    const link = "http://www.linkedin.com/in/samar-abbas-a1ab4625a";
    window.open(link, "_blank");
  }

  function insta() {
    const link = "https://www.instagram.com/samar_abbas_786/";
    window.open(link, "_blank");
  }

  function fb() {
    const link = "https://www.facebook.com/samar.naqvi.568";
    window.open(link, "_blank");
  }

  function twitter() {
    const link = "https://twitter.com/SamarAb65178114";
    window.open(link, "_blank");
  }

  //
  // function for links on left side

  function home() {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  }

  function project() {
    const project = document.getElementById("project");
    if (project) {
      project.scrollIntoView({ behavior: "smooth" });
    }
  }

  function contact() {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  }
  function skill() {
    const skill = document.getElementById("skill");
    if (skill) {
      skill.scrollIntoView({ behavior: "smooth" });
    }
  }
  function home() {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="top"></div>
      <div className="main flex justify-between">
        <Sidesection
          fb={fb}
          insta={insta}
          github={github}
          twitter={twitter}
          link={link}
        ></Sidesection>
        <Right github={github}></Right>
      </div>
    </>
  );
}

export default App;
