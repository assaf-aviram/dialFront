import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  setAsync,
} from '../../store/actions';
import Button from '../../components/Button';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>
      Count: {props.count}<br />
      async period: <input onChange={props.setAsync} type="number" placeholder="3000" value={props.asyncPeriod} /> MS
    </p>

    <p>
      <Button primary onClick={props.increment} disabled={props.isIncrementing}>Increment</Button>
      <Button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</Button>
    </p>

    <p>
      <Button primary onClick={props.decrement} disabled={props.isDecrementing}>Decrement</Button>
      <Button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</Button>
    </p>

    <p><Button primary onClick={() => props.changePage()}>Go to about page via redux</Button></p>
  </div>
)

const mapStateToProps = state => state.counter;

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  setAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
