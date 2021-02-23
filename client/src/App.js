import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import Register from './components/Register.js'
import Login from './components/Login.js'
import UserProfile from './components/UserProfile.js'
import Properties from './components/Properties.js'
import PropertyProfile from './components/PropertyProfile.js'
import MakeProperty from './components/MakeProperty.js'
import UpdateProperty from './components/UpdateProperty.js'


import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/register' component={Register}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/users/:usersId' component={UserProfile}></Route>
      <Route exact path='/properties' component={Properties}></Route>
      <Route exact path='/properties/:propertyId' component={PropertyProfile}></Route>
      <Route exact path='/makeproperty' component={MakeProperty}></Route>
      <Route exact path='/updateproperty/:propertyId' component={UpdateProperty}></Route>
    </Switch>
    <Footer></Footer>
  </BrowserRouter>
)



export default App