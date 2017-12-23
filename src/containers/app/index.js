import React from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Home from '../home'
import Dial from '../dial'

const App = () => (
  <div>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/dial">Dial</Link>
    </Nav>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/dial" component={Dial} />
    </main>
  </div>
)

export default App
