import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile'
import News from './components/News';
import PageNotFound from './components/PageNotFound'
import Login from './components/Login'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <AppBar position="static" color="default">
              <Toolbar>
                <ul>
                  <li>
                    <Typography variant="h6" color="inherit">
                      TZ #1, v.2.0
                    </Typography>
                  </li>
                  <li>
                    <Link to="/"><Button variant="contained" color="primary" href="/">Главная</Button></Link>
                  </li>
                  <li>
                    <Link to="/profile"><Button variant="contained" color="primary" href="/profile">Профиль</Button></Link>
                  </li>
                  <li>
                    <Link to="/news"> <Button variant="contained" color="primary" href="/news">Новости</Button></Link>
                  </li>
                  <li>
                    <Link to="/pagenotfound"><Button variant="contained" color="primary" href="/pagenotfound">404</Button></Link>
                  </li>
                  <li>
                    <Link to="/login"> <Button variant="contained" color="primary" href="/login">Логин</Button></Link>
                  </li>
                </ul>
              </Toolbar>
            </AppBar>

            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile}/>
            <Route path="/news" component={News}/>
            <Route path="/pagenotfound" component={PageNotFound}/>
            <Route path="/login" component={Login}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
