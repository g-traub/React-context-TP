import React from "react";
import AuthContext from "../context/Auth";

export default () => (
  <AuthContext.Consumer>
    {(context) => (
      <span className="App-link" onClick={context.changeAuth}>
        Se connecter
      </span>
    )}
  </AuthContext.Consumer>
);
