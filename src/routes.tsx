import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import EmployeesList from './pages/EmployeesList'
import EmployeeDetails from './pages/EmployeeDetails'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={EmployeesList} />
        <Route path="/employee/:id" exact component={EmployeeDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes
