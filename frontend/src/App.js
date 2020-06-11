import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={(props) => (<Main{...props}/>)} />
          <Route path='/login' exact render={(props) => (<Login{...props}/>)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App