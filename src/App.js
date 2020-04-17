import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthContext from "./context/Auth";
import AuthStateDisplayer from "./components/AuthStateDisplayer";
import AuthToggler from "./components/AuthToggler";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => setIsAuth(!isAuth);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AuthContext.Provider value={{ isAuth, changeAuth: toggleAuth }}>
        <AuthStateDisplayer />
        <AuthToggler />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
