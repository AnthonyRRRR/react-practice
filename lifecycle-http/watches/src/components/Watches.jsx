import React , { useState } from 'react';
import PropTypes from 'prop-types';
import AddWatchForm from './AddWatchForm';
import { nanoid } from 'nanoid';
import WatchList from './WatchList';

const Watches = (props) => {
  const [form, setAddWatchForm] = useState({ cityname: '', timezone: ''});
  const [watches, setWatches] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWatch = {
      id: nanoid(),
      cityname: form.cityname,
      timezone: Number(form.timezone)
    };
    setWatches(prevWatch => [...prevWatch, newWatch]);
    setAddWatchForm({ cityname: '', timezone: '' })
  };

  const onChange = (event) => {
    setAddWatchForm(prevForm => ({ ...prevForm, [event.target.name]: event.target.value }))
  };

  const watchItemHandleRemove = (id) => {
    setWatches(prevWatches => prevWatches.filter(prevWatch => prevWatch.id !== id))
  };

  return (
    <>
      <AddWatchForm onChange={onChange} handleSubmit={handleSubmit} form={form}/>
      <WatchList watches={watches} watchItemHandleRemove={watchItemHandleRemove}/>
    </>
  );
};

Watches.propTypes = {};

export default Watches