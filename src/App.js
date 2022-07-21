import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { FindId } from "./components/findid/FindId";
import { Forgot } from "./components/forgot/Forgot";
import { Login } from "./components/login/Login";
import { Singup } from "./components/singup/Singup";
import { Globalstyled } from "./components/style/GlobalStyled";

function App() {
  return (
    <Router>
      <Globalstyled />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/findid" element={<FindId />} />
      </Routes>
    </Router>
  );
}

export default App;
