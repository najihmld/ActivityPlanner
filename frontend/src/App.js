import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'
import Users from './pages/Users'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={(props) => (<Main{...props}/>)} />
          <Route path='/login' render={(props) => (<Login{...props}/>)} />
          <Route path='/users' render={(props) => (<Users{...props}/>)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App