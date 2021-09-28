import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateServiceInfo, changeServiceField, fetchEditService } from '../actions/actionCreators';
import { useHistory } from 'react-router-dom';
import Loader from './Loader';
import ErrorAlert from './ErrorAlert';

const ServiceEdit = ({ match }) => {
  const id = Number(match.params.id);
  const { item, loading, error } = useSelector(state => state.serviceEdit);
console.log(item)
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    fetchEditService(dispatch, id)
  }, [dispatch, id]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    updateServiceInfo(dispatch, item.name, item.price, item.content, item.id);
    history.push('/services')
  };

  if(loading) {
    return <Loader/>
  }

  if(error) {
    return <ErrorAlert>{error}</ErrorAlert>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Название</span>
        <input
          type="text" className="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="name"
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
      <button type="submit" className="btn btn-danger" >Сохранить</button>
    </form>
  );
};

ServiceEdit.propTypes = {};

export default ServiceEdit