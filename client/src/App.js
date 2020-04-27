import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Afterschool from './pages/Afterschool'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/afterschool' component={Afterschool} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  )
}

export default App
