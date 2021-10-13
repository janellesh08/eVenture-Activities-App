import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BaseLayout from './pages/BaseLayout';
import About from './pages/About';
import MyEventures from './pages/MyEventures';
import AddNewEventure from './pages/AddNewEventure';
import fetchActivitiesReducer from './store/reducers/FetchActivitiesReducer';
import AuthenticatedReducer from './store/reducers/AuthenticatedReducer';
import EventuresPage from './pages/eVenturesPage';

const reducer = combineReducers({
  fetchActivityRed: fetchActivitiesReducer,
  authRed: AuthenticatedReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About} />
            <Route path='/my-eventures' component={MyEventures} />
            <Route path='/add-new-eventure' component={AddNewEventure} />
            <Route path='/all-eventures' component={EventuresPage} />
            <Route path='/Login' component={Login} />
            <Route path='/SignUp' component={SignUp} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


