import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './He2rgb.css'
import useHexToRgb from '../../hooks/useHexToRgb';

const Hex2rgb = (props) => {
  const [hex, setHex] = useState({
    hex: ''
  });

  const onChange = (event) => {
    setHex(prevState => ({ ...prevState, hex: event.target.value }))
  };

  const { rgb, isError } = useHexToRgb(hex.hex);

  useEffect(() => {
    if (isError) {
      document.body.style.backgroundColor = '#ff0000'
    } else if (!isError && !rgb) {
      document.body.style.backgroundColor = '#fff'
    } else {
      document.body.style.backgroundColor = `rgb(${ rgb })`
    }

  }, [isError, rgb]);

  return (
    <div className="He2rgb-container">
      <input className="He2rgb-container__input" name="hex" onChange={ onChange } value={ hex.hex }/>
      <div className="He2rgb-container__output">
        { isError ? <p>Ошибка!</p> : <p className="rgb">RGB({ rgb })</p> }
      </div>
    </div>
  );
};

Hex2rgb.propTypes = {};

export default Hex2rgb


