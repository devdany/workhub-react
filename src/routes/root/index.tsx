import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Feed from '@pages/feed'
import Follow from '@pages/follow'
import Home from '@pages/home'
import MyPage from '@pages/my'
import React from 'react'

export default function Root(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/feed' exact component={Feed}/>
        <Route path='/follow' exact component={Follow}/>
        <Route path='/my' exact component={MyPage}/>
      </Switch>
    </BrowserRouter>
  )
}