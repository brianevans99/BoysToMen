import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import Afterschool from './pages/Afterschool'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/afterschool' component={Afterschool} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
