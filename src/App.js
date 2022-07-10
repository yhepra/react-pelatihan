import "./App.css";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import Counterf from "./components/Counterf";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import { Greet } from "./components/Greet";
import { Hello } from "./components/Hello";
import { Message } from "./components/Message";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Message /> */}
      {/* <Counterf /> */}
      {/* <Greet name="Aben" heroName="Iron Man">
        <p>This is cildren props</p>
      </Greet>
      <Greet name="Imron" heroName="Moon Knight">
        <button>Action</button>
      </Greet>
      <Greet name="Aris" heroName="Hulk" />
      <Welcome name="Edwar" heroName="Thor">
        <p>Avengers</p>
      </Welcome>
      <Welcome name="Hanafi" heroName="Doctor Strange" /> 
       <Hello /> */}
    </div>
  );
}

export default App;
