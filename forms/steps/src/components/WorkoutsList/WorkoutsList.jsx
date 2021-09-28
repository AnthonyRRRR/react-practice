import React from 'react';
import './WorkoutsList.css'
import PropTypes from 'prop-types';
import moment from 'moment'


const WorkoutsList = ({ workouts, workoutItemHandleRemove }) => {
  const sortedWorkouts = [...workouts].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <>
      <div className="WorkoutsList__title-container">
        <div>Дата (ДД.ММ.ГГ)</div>
        <div>Пройдено км</div>
        <div>действия</div>
      </div>
      {
        sortedWorkouts.map((workout) =>
          <div className="WorkoutsList-container" key={ workout.id }>
            <div>{ workout.date }</div>
            <div>{ workout.distance }</div>
            <button
              className="WorkoutsList-container__button"
              onClick={ () => workoutItemHandleRemove(workout.id) }
            >
              X
            </button>
          </div>)
      }
    </>
  );
};

WorkoutsList.propTypes = {
  workouts: PropTypes.arrayOf(PropTypes.object),
  workoutItemHandleRemove: PropTypes.func
};

export default WorkoutsList