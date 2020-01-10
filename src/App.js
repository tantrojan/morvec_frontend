import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import {Navbar} from 'react-bootstrap'

// Components
import Layout from './hoc/Layout/layout'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import Movies from './components/Movies/Movies';
import Genres from './components/Genres/Genres';

//Bootstrap-CSS
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  state = {
    user_loggedin : false
  }
  componentWillMount(){
    const URL = 'https://localhost:8000/';

    // fetch(URL)
    // .
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
          <Route path='/' exact component={Home}/>
          <Route path='/auth' exact component={Auth}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path='/genres' exact component = {Genres}/>
          <Route path='/movies' exact component={Movies}/>
          {/* <Route path='/scrapeview' scrapeViewRoutes/>
          <Route path='/yearwise' yearwiseRoutes/>
          <Route path='/getmerc' exact component={getmerc}/>
          <Route path='/discover' discoverRoutes/> */}
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

