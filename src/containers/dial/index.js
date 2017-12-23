import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { } from '../../store/actions';
import Button from '../../components/Button';

const Dial = props => (
  <div>
    <h1>Dial</h1>
    <Button primary>Start</Button>
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dial)
