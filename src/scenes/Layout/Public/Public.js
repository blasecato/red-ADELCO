import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { FormLogin } from '../../Login/Login'

export const Public = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={FormLogin} />
        <Route path="*" component={FormLogin} />
      </Switch>
    </Router>
  )
}