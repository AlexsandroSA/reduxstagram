import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import { history } from './store'

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

const AppRouter = () => (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>        
        </Route>
    </Router>
)

export default AppRouter;