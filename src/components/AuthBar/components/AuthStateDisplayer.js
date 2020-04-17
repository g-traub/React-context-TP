import React from "react";
import AuthContext from "../../../context/Auth";

export default () => (
  <AuthContext.Consumer>
    {(context) =>
      context.isAuth ? <p>User is connected</p> : <p>User is deconnected</p>
    }
  </AuthContext.Consumer>
);
