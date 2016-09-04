import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import {
  App,
  Gussted,
  Lunarlon,
  Technology,
  Home
} from './Components'
import './StyleSheets/style.sass'

const router =
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/Gussted' component={Gussted} />
      <Route path='/Technology' component={Technology} />
      <Route path='/Lunarlon' component={Lunarlon} />
    </Route>
  </Router>
render(router, document.getElementById('root'))
