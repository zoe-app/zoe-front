import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Title } from '../../components';
import { authService } from '../../service/authService/authService';
import { asyncLocalStorage, getLoginErrorMessage } from '../../utils';
import { Container, FormContainer } from './Container';

export function LoginPage() {
  const [email, setEmail] = useState('pedro@barretto.com.br');
  const [password, setPassword] = useState('Senha123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onLogin = async () => {
    const res = await authService.login(email, password);

    if (res.error) {
      const errorMsg = getLoginErrorMessage(res.error);
      setError(errorMsg);
      return;
    }

    setError('');
    await asyncLocalStorage.setItem('AuthToken', res.token);
    navigate('/metas');
  };

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <TextInput
          style={{ marginBottom: '1.2rem' }}
          type='text'
          value={email}
          placeholder='Email'
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextInput
          style={{ marginBottom: '1.2rem' }}
          type='text'
          value={password}
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <Button type='button' onClick={onLogin}>
          Login
        </Button>
      </FormContainer>
    </Container>
  );
}
