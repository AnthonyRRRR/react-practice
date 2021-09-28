import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  changeEditServiceField,
  fetchEditService,
  updateServiceInfo
} from '../actions/actionCreators';
import Loader from './Loader';
import ErrorAlert from './ErrorAlert';

const ServiceEdit = ({ match }) => {
  const id = Number(match.params.id);
  const { item, loading, error } = useSelector(state => state.serviceEdit);
  const { updateItem } = useSelector(state => state.serviceUpdate);

  const dispatch = useDispatch()
  let history = useHistory();

  useEffect(() => {
    dispatch(fetchEditService(id))
  }, [dispatch])


  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(updateServiceInfo(item.name, item.price, item.content, item.id))
    history.push('/services')
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeEditServiceField(name, value));
  };

  if(loading) {
    return <Loader/>
  }

  if (error) {
    return <ErrorAlert>{error}</ErrorAlert>
  }


  return (
    <form onSubmit={ handleSubmit }>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Название</span>
        <input
          type="text" className="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="editname"
          value={ item.name }
          onChange={ handleChange }
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Стоимость</span>
        <input
          type="text" className="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="price"
          value={ item.price }
          onChange={ handleChange }
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Описание</span>
        <input
          type="text" className="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="content"
          value={ item.content }
          onChange={ handleChange }
        />
      </div>
      <button type="button" className="btn btn-danger">Отмена</button>
      <button type="submit" className="btn btn-danger">Сохранить</button>
    </form>
  );
};

ServiceEdit.propTypes = {};

export default ServiceEdit