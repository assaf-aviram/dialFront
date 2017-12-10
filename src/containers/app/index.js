import React from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </Nav>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
