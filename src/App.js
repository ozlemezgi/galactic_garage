import logo from "./logo.svg";
import Main from "./Components/Main";
import Card from "./Components/Card";
import Detail from "./Components/Detail";
import "./Components/style.css";
import { Route ,Routes ,Link} from "react-router-dom";

function App() {
  return (
      <Routes> // Defining page routes
        <Route path="/" element={<Main/>}>
          <Route path="detail/:name" element={<Detail/>} />
          </Route>
      </Routes>
  
  );
}

export default App;
