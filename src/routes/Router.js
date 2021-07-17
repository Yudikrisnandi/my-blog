import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"
import Course from "../pages/Course"
import NotFound from "../pages/NotFound"

const Routes = () => {
  return(
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/course" exact component={Course}/>
        <Route component={NotFound}/>
      </Switch>
    </React.Fragment>
  )
}

export default Routes;
