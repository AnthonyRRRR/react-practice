import {UPDATE_SERVICE_REQUEST, UPDATE_SERVICE_SUCCESS, UPDATE_SERVICE_FAILURE} from '../actions/actionTypes';

const initialState = {
  item: { name: '', price: '', content: '', id: '' },
  loading: false,
  error: null,
};

export default function serviceUpdateReduce(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SERVICE_REQUEST:
      return { ...state };
    case UPDATE_SERVICE_FAILURE:
      const { error: errorUpdate } = action.payload;
      return { ...state, loading: false, error: errorUpdate};
    case UPDATE_SERVICE_SUCCESS:
      return { ...initialState }
    // case CHANGE_SERVICE_FIELD:
    //   const { name, value } = action.payload;
    //   return { ...state, item: { ...state.item, [name]: value, } };
    default:
      return state
  }
}