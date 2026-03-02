import "./App.css";
import { Buttonbg } from "./componets/Buttonbg";
import { Card } from "./componets/Card";
import Passwordgenetor from "./componets/Passwordgenetor";
import Todo from "./componets/Todo";


function App() {
  return (
    <div className="flex justify-center items-center p-4">
      {/* <Counter /> */}
      {/* <Card userName="Sucitra"/> */}
       {/* <Card userName="Suchitra" click="Click"/> */}
       {/* <Buttonbg/> */}
       {/* <Passwordgenetor/> */}
       <Todo/>
    </div>
  );
}

export default App;
