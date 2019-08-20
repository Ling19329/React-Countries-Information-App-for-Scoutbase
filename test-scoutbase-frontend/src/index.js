import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Country from './components/country';
import CountryList from './components/country-list';
import { Switch} from 'react-router-dom';
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
	uri: "https://countries.trevorblades.com/"
})

render((
  <ApolloProvider client={client}>
    <Router>
        <Switch>
              <Route exact path='/' component={App} />
              <Route path='/countries/:id' component={Country} />
              <Route path='/countries' component={CountryList} />
        </Switch>
      </Router>
    </ApolloProvider>
  ), document.getElementById('root'));

serviceWorker.unregister();
