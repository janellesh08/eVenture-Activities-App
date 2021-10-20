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
import AddNewEventure from './pages/AddNewEventure';
import fetchActivitiesReducer from './store/reducers/FetchActivitiesReducer';
import AuthenticatedReducer from './store/reducers/AuthenticatedReducer';
import MyEventureProfile from './components/MyEventureProfile';
import EventuresPage from './pages/eVenturesPage';
import ActivityJournalListUser from './components/ActivityJournalListUser';
import AddJournalEntry from './components/AddJournalEntry';
import ActivityJournalListPublic from './components/ActivityJournalListPublic';
import ActivityJournalPage from './pages/ActivityJournalPage';

import requireAuth from './components/requireAuth';

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
            
            <Route path='/activity-journal-entries/:activityId' component= {ActivityJournalListPublic}/>
            <Route path='/activity-journal-page/:activityId' component={ActivityJournalPage}/>
            <Route path='/my-activity-journal-entries/:activityId/:userId' component ={requireAuth(ActivityJournalListUser)}/>
            <Route path='/my-eventures' component={requireAuth(MyEventureProfile)} />
            <Route path='/add-new-eventure' component={requireAuth(AddNewEventure)} />
            <Route path='/all-eventures' component={requireAuth(EventuresPage)} />
           
            <Route path='/add-journal-entry/:activityId' component={requireAuth(AddJournalEntry)}/>
            <Route path='/Login' component={Login} />
            <Route path='/SignUp' component={SignUp} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


