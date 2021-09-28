import {
  FETCH_SERVICE_DETAILS_SUCCESS,
  FETCH_SERVICE_DETAILS_FAILURE,
  FETCH_SERVICE_DETAILS_REQUEST
} from '../actions/actionTypes';

const initialState = {
  item: { name: '', price: '', content: '', id: '' },
  loading: false,
  error: null,
};

export default function serviceDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICE_DETAILS_REQUEST:
      const { id } = action.payload;
      return { ...state, id, loading: true, error: null };
    case FETCH_SERVICE_DETAILS_SUCCESS:
      const { item } = action.payload;
      return { ...state, item, loading: false, error: null };
    case FETCH_SERVICE_DETAILS_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    default:
      return state;
  }
}