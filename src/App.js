import Main from "./Components/Main";
import Detail from "./Components/Detail";
import "./Components/style.css";
import { Route ,Routes } from "react-router-dom";

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
