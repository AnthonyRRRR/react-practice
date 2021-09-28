import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../contexts/AuthContext';

const LoginForm = (props) => {
  const [form, setForm] = useState({ login: '', password: '' });
  const { handleLogin } = useContext(AuthContext);

  const onChange = (event) => {
    setForm(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleLogin(form.login, form.password)
  };

  return (
    <form onSubmit={ onSubmit }>
      <div className="mb-3">
        <label htmlFor="login" className="form-label">Login</label>
        <input
          onChange={ onChange }
          value={ form.login }
          type="login"
          name="login"
          className="form-control"
          id="login"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          onChange={ onChange }
          value={ form.password }
          type="text"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button
        type="submit"
        className="btn btn-success"
      >Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {};

export default LoginForm