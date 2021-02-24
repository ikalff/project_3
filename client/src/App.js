import React, { useState } from 'react'
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

const App = () => {

  return <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/users/:usersId' component={UserProfile} />
      <Route exact path='/properties' component={Properties} />
      <Route exact path='/properties/:propertyId' component={PropertyProfile} />
      <Route exact path='/makeproperty' component={MakeProperty} />
      <Route exact path='/updateproperty' component={UpdateProperty} />
    </Switch>
    <Footer />
  </BrowserRouter>
}



export default App