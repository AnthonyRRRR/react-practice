import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_FAILURE,
  EDIT_SERVICE_SUCCESS,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_FAILURE,
  UPDATE_SERVICE_SUCCESS
} from '../actions/actionTypes'


const initialState = {
  item: { name: '', price: '', content: '', id: ''},
  loading: false,
  error: null,
};

export default function serviceEditReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE_REQUEST:
      return { ...state, loading: true, error: null, };
    case EDIT_SERVICE_FAILURE:
      const { error: errorEdit } = action.payload;
      return { ...state, loading: false, error: errorEdit };
    case EDIT_SERVICE_SUCCESS:
      const {item} = action.payload
      return {...state, item, loading: false, error: null}
    case UPDATE_SERVICE_REQUEST:
      return { ...state };
    case UPDATE_SERVICE_FAILURE:
      const { error: errorUpdate } = action.payload;
      return { ...state, loading: false, error: errorUpdate};
    case UPDATE_SERVICE_SUCCESS:
      return { ...initialState }
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, item: { ...state.item, [name]: value, } };
    default:
      return state
  }
}
