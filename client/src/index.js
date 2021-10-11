import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BaseLayout from './pages/BaseLayout';
import About from './pages/About';
import MyEventures from './pages/MyEventures';
import AddNewEventure from './pages/AddNewEventure';
import App from './pages/App';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/home' component={HomePage}/>
            <Route path='/about' component={About} />
            <Route path='/my-eventures' component={MyEventures} />
            <Route path='/add-new-eventure' component={AddNewEventure} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


