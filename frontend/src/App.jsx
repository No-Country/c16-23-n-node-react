import { BrowserRouter as Router } from "react-router-dom";
import Public from "./routes/Routes";
import "./styles/index.scss";

function App() {
  return (
    <>
      <Router>
        <Public />
      </Router>
    </>
  );
}

export default App;
