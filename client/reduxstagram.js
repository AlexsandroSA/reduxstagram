import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AppRouter from './appRouter'
import './styles/style.styl'

const router = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

render(
  router,
  document.getElementById('root')
)
