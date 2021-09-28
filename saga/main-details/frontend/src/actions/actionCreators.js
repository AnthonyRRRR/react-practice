import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICE_DETAILS_FAILURE,
  FETCH_SERVICE_DETAILS_REQUEST,
  FETCH_SERVICE_DETAILS_SUCCESS,
} from './actionTypes';

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const fetchServiceDetailsRequest = (id) => ({
  type: FETCH_SERVICE_DETAILS_REQUEST,
  payload: {
    id
  }
})

export const fetchServiceDetailsFailure = (error) => ({
  type: FETCH_SERVICE_DETAILS_FAILURE,
  payload: {
    error
  }
});

export const fetchServiceDetailsSuccess = (item) => ({
  type: FETCH_SERVICE_DETAILS_SUCCESS,
  payload: {
    item
  }
})