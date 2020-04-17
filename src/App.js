import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthContext from "./context/Auth";
import AuthBar from "./components/AuthBar/AuthBar";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => setIsAuth(!isAuth);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AuthContext.Provider value={{ isAuth, changeAuth: toggleAuth }}>
        <AuthBar />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
