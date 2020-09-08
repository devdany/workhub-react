import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FEED, FOLLOW, HOME, PROJECT, TEAM } from '@routes/path'

import Feed from '@pages/feed'
import Follow from '@pages/follow'
import Home from '@pages/home'
import Project from '@pages/project'
import React from 'react'
import Team from '@pages/team'

export default function Root(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME} exact component={Home} />
        <Route path={FEED} component={Feed} />
        <Route path={FOLLOW} component={Follow} />
        <Route path={PROJECT} component={Project} />
        <Route path={TEAM} component={Team} />
      </Switch>
    </BrowserRouter>
  )
}