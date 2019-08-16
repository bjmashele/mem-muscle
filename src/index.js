import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Welcome from './auth/components/Welcome';
import Signup from './auth/components/auth/Signup';
import Decks from './decks/components/Decks.jsx';
import CardList from './decks/components/CardList';
import Signout from './auth/components/auth/Signout';
import Signin from './auth/components/auth/Signin';

// styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// initiate store
import { configureStore } from './store/configureStore';

const store = configureStore();

// const store = createStore(
//   reducers,
//   {
//     auth: { authenticated: localStorage.getItem('token') }
//   },
//   applyMiddleware(reduxThunk)
// );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Decks} />
        <Route path="/card-list" component={CardList} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
