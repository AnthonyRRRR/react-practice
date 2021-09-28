import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  REMOVE_SERVICE_API,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_FAILURE,
  EDIT_SERVICE_SUCCESS,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_FAILURE,
  UPDATE_SERVICE_SUCCESS,
  CHANGE_EDIT_SERVICE_FIELD,

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

export const addServiceRequest = (name, price, id) => ({
  type: ADD_SERVICE_REQUEST,
  payload: {
    name,
    price,
    id
  },
})

export const addServiceFailure = error => ({
  type: ADD_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const addServiceSuccess = () => ({
  type: ADD_SERVICE_SUCCESS,
});

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const changeEditServiceField = (name, value) => ({
  type: CHANGE_EDIT_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
})


export const removeApi = id => ({
  type: REMOVE_SERVICE_API,
  payload: {
    id
  }
})

export const editServiceRequest = () => ({
  type: EDIT_SERVICE_REQUEST,
});



export const editServiceFailure = error => ({
  type: EDIT_SERVICE_FAILURE,
  payload: {
    error
  }
})

export const editServiceSuccess = item => ({
  type: EDIT_SERVICE_SUCCESS,
  payload: {
    item
  },
});


export const updateServiceRequest = () => ({
  type: UPDATE_SERVICE_REQUEST,
});

export const updateServiceFailure = error => ({
  type: UPDATE_SERVICE_FAILURE,
  payload: {
    error
  }
});

export const updateServiceSuccess = (name, price, content) => ({
  type: UPDATE_SERVICE_SUCCESS,
  payload: {
    name,
    price,
    content
  }
})



export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());

  try {
    const response = await fetch(`${ process.env.REACT_APP_SERVICES_URL }`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    dispatch(fetchServicesSuccess(data));
  } catch (error) {
    dispatch(fetchServicesFailure(error.message));
  }
};

export const addService = () => async (dispatch, getState) => {
  dispatch(addServiceRequest());
  const { serviceAdd: { item: { name, price, id } } } = getState();

  try {
    const response = await fetch(`${ process.env.REACT_APP_SERVICES_URL }`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, id }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }

  dispatch(fetchServices());
};

export const fetchEditService = (id) => async (dispatch, getState) => {
  dispatch(editServiceRequest());

  try {
    const response = await fetch(`${ process.env.REACT_APP_SERVICES_URL }/${ id } `, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',  'Access-Control-Allow-Origin': '*' },
    })

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const item = await response.json();

    dispatch(editServiceSuccess(item));
  } catch (error) {
    dispatch(editServiceFailure(error.message));
  }
}

export const removeServiceApi = (id) => async (dispatch, getState) => {
  dispatch(removeApi(id))
  const response = await fetch(`${ process.env.REACT_APP_SERVICES_URL }/${ id }`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateServiceInfo = (name, price, content, id) => async (dispatch, getState) => {
  dispatch(updateServiceRequest())
  try {
    const response = await fetch(`${ process.env.REACT_APP_SERVICES_URL }`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, content, id }),
    }).then(response => console.log(response))
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(updateServiceSuccess());
  } catch (e) {
    dispatch(updateServiceFailure(e.message));
  }

  dispatch(fetchServices())
}


