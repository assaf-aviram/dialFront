import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as R from 'ramda';

// Actions
import {
  searchAddress,
  selectResult,
} from "../../store/actions";

// Components
import Typeahead from "../../components/Typeahead";

const getMapUrl = ({ geocodePoints }) => `https://www.google.com/maps/search/?api=1&query=${geocodePoints.join(',')}`

const Geo = props => (
  <div style={{ width: '50em' }}>
    <h1>Geo</h1>
    <Typeahead
      onSearch={props.searchAddress}
      items={props.results}
      onChange={props.selectResult}
      itemToString={i => `${i.address}`}
    />
    {props.selected && <a href={getMapUrl(props.selected)} target="_blank">Open Map</a>}
  </div>
);

const mapStateToProps = state => state.geo;

const mapDispatchToProps = dispatch => bindActionCreators({
    searchAddress,
    selectResult,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Geo);
