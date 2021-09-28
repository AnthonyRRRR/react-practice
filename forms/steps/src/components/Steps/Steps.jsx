import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StepsForm from '../StepsForm/StepsForm';
import WorkoutsList from '../WorkoutsList/WorkoutsList';
import WorkoutModel from '../../Model/WorkoutModel';
import { nanoid } from 'nanoid';

const Steps = (props) => {
  const [form, setForm] = useState({
    date: '',
    distance: ''
  });
  const [workouts, setWorkouts] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newWorkout = new WorkoutModel(nanoid(), form.date, form.distance);
    setWorkouts(prevWorkouts => {
      const sameDayWorkout = prevWorkouts.find(workout => workout.date === newWorkout.date);
      if (!sameDayWorkout) {
        return [...prevWorkouts, newWorkout]
      } else {
        const sameDayDistance = Number(sameDayWorkout.distance) + Number(newWorkout.distance);

        return prevWorkouts.map(workout => {
          if (workout.date === sameDayWorkout.date) {
            return { ...workout, distance: sameDayDistance }
          } else {
            return workout
          }
        })
      }
    });

    setForm({ date: '', distance: '' })
  };


  const dateOnChange = (event) => {
    setForm(prevForm => ({ ...prevForm, date: event.target.value }))
  };
  const distanceOnChange = (event) => {
    setForm(prevForm => ({ ...prevForm, distance: event.target.value }))
  };

  const workoutItemHandleRemove = (id) => {
    setWorkouts(prevWorkouts => prevWorkouts.filter(prevWorkout => prevWorkout.id !== id))
  };


  return (
    <div>
      <StepsForm
        handleSubmit={ handleSubmit }
        form={ form }
        dateOnChange={ dateOnChange }
        distanceOnChange={ distanceOnChange }
      />
      <WorkoutsList
        workouts={ workouts }
        workoutItemHandleRemove={ workoutItemHandleRemove }
      />
    </div>
  );
};

Steps.propTypes = {};

export default Steps