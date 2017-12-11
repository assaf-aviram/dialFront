import { stringify } from 'query-string'
import request from 'superagent';
import * as R from 'ramda';
import * as C from '../constants';

const MAPS_URL = 'https://dev.virtualearth.net/REST/v1/Locations?'
const MAPS_API_KEY = 'AgBT9pWBwQKB246nrwmMjEN9PFUvPvjJabV1-IV-P_BGaB7R43k7rOFmqnWOQD2s';

const procAddress = R.compose(
    R.join(', '),
    R.values,
    R.pick(['formattedAddress', 'countryRegion']),
);

const procGeoPoints = R.compose(
    R.prop('coordinates'),
    R.head,
);

const procResult = R.compose(
    R.pick(['address', 'geocodePoints']),
    R.evolve({
        address: procAddress,
        geocodePoints: procGeoPoints,
    })
);

const mapGeoResponse = R.compose(
    R.map(procResult),
    R.defaultTo([]),
    R.path(['body', 'resourceSets', 0, 'resources']),
);

const defaultMapParams = {
    key: MAPS_API_KEY,
    maxResults: 10,
    CountryRegion: 'US',
    // adminDistrict,
    // locality,
    // postalCode,
    // addressLine,
}

export const searchAddress = address => async (dispatch, getState) => {
    if (!address) return;
    const queryParams = stringify({
        ...defaultMapParams,
        addressLine: address,
    });
    const url = `${MAPS_URL}${queryParams}`;
    dispatch({ type: C.SEARCH_ADDRESS });
    let response;
    let data;
    try {
        response = await request.get(url);
        dispatch({
            type: C.SEARCH_ADDRESS_SUCCESS,
            payload: mapGeoResponse(response),
        })
    } catch(e) {
        dispatch({ type: C.SEARCH_ADDRESS_FAIL });
        console.log('error', e);
    }
    
}

export const selectResult = result => ({ type: C.SELECT_RESULT, payload: result });