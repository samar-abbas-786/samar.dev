import "./App.css";
import Sidesection from "./components/sideSection";
import Right from "./components/right";
function App() {
  return (
    <>
      <div className="top"></div>
      <div className="main flex justify-between">
        <Sidesection></Sidesection>
        <Right></Right>
      </div>
    </>
  );
}

export default App;
