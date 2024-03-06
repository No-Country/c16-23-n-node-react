import { BrowserRouter as Router } from "react-router-dom";
import Public from "./routes/Routes";
import "./styles/index.scss";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Public />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
