import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthContext/Auth';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useContext(AuthContext);

    const onSubmit = (data) => {
      login(data.email, data.password);
    };
  
    return (
        <div className={`formWrapper`}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="formContainer">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true })}
                placeholder="Enter your email"
              />
            
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                {...register('password', { required: true })}
                placeholder="Enter your password"
              />
  
              <button type="submit">Login</button>
            </div>
          </Form>
        </div>
    );
  };

export default LoginPage;