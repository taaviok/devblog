import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const URL_TOKEN = 'http://127.0.0.1:8000/api/token-auth';

const StyledLoginBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
});

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    const options = {
      referrer: 'no-referrer-when-downgrade',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ username, password })
    };

    const response = await fetch(URL_TOKEN, options);
    const token = await response.json();

    setToken(token.token);
  }

  return (
    <StyledLoginBox>
      <Paper>
        <form onSubmit={handleSubmit}>
          <label>
            <b>Username</b>
            <input
              type='text'
              name='username'
              onChange={e => setUserName(e.target.value)}
            />
          </label>
          <br />
          <label>
            <b>Password </b>
            <input
              type='password'
              name='password'
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type='submit'>Sign in</button>
        </form>
      </Paper>
    </StyledLoginBox>
  )
}

export default Login;