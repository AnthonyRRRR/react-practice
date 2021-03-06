import {
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_FAILURE,
  EDIT_SERVICE_SUCCESS,
  CHANGE_SERVICE_FIELD, CHANGE_EDIT_SERVICE_FIELD
} from '../actions/actionTypes'


const initialState = {
  item: { name: '', price: '', content: '', id: '' },
  loading: false,
  error: null,
};


export default function serviceEditReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE_REQUEST:
      return { ...state, loading: true, error: null};
    case EDIT_SERVICE_SUCCESS:
      const {item: itemForEdit} = action.payload;
      return { ...state, item: itemForEdit,  loading: false, error: null };
    case EDIT_SERVICE_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case CHANGE_EDIT_SERVICE_FIELD:
      const { name, value } = action.payload;
      const { item } = state;
      return { ...state, item: { ...item, [name]: value, } };
    default:
      return state;
  }
}