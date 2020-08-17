import React from "react"
import { Switch, Route } from "react-router-dom";
import ViewLogin from "./Views/view-login"

const Routes = () => {
    return (
      <Switch>
        <Route exact path='/' component={ViewLogin} />
        <Route exact path='/Login' component={ViewLogin} />
      </Switch>
    )
}
export default Routes;
