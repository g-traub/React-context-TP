import React from "react";
import AuthContext from "../../../context/Auth";

export default () => (
  <AuthContext.Consumer>
    {(context) => (
      <span className="App-link" onClick={context.changeAuth}>
        {context.isAuth ? "Se déconnecter" : "Se connecter"}
      </span>
    )}
  </AuthContext.Consumer>
);
