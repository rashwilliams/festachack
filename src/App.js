import { Fragment } from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default App;
