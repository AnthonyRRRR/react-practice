import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError, concatMap } from 'rxjs/operators';
import {
  FETCH_SERVICES_REQUEST,

  FETCH_SERVICE_DETAILS_REQUEST,
} from '../actions/actionTypes';
import {
  fetchServicesFailure,
  fetchServicesSuccess,
  fetchServiceDetailsFailure,
  fetchServiceDetailsSuccess
} from '../actions/actionCreators';
import { of } from 'rxjs';

export const fetchSuccess = action$ => action$.pipe(
  ofType(FETCH_SERVICES_REQUEST),
  switchMap(o => ajax.getJSON(`${ process.env.REACT_APP_SERVICES_URL }`).pipe(
    map(items => fetchServicesSuccess(items)),
    catchError(e => of(fetchServicesFailure(e))),
  )),
);
// `${ process.env.REACT_APP_SERVICES_URL }/${ o }`

export const fetchDetailsSuccess = action$ => action$.pipe(
  ofType(FETCH_SERVICE_DETAILS_REQUEST),
  map(o => o.payload.id),
  switchMap(id => ajax.getJSON(`${ process.env.REACT_APP_SERVICES_URL }/${ id }`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',  'Access-Control-Allow-Origin': '*' },
  }).pipe(
    map(item => fetchServiceDetailsSuccess(item)),
    catchError(e => of(fetchServiceDetailsFailure(e))),
  ))
)

