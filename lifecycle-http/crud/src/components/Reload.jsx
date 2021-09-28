import React from 'react';
import PropTypes from 'prop-types';

const Reload = ({loadNotes}) => {
  return (
      <div>
        <button className="btn-green" onClick={loadNotes}>
          <img className="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png" /> Reload
        </button>
      </div>
  );
};

Reload.propTypes = {
  loadNotes: PropTypes.func.isRequired
};

export default Reload