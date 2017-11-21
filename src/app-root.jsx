import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import PropTypes from 'prop-types'

import SummonerApp from './components/summoner-app.jsx'
import SummonerProfile from './components/summoner-profile.jsx'

const AppRoot = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="app-root">
        <Route exact path="/" component={SummonerApp}/>
        <Route exact path="/summoner-profile/:summoner" component={SummonerProfile}/>
      </div>
    </ConnectedRouter>
  </Provider>
)

AppRoot.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default AppRoot
