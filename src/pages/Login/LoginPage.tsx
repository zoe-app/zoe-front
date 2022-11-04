import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Title } from '../../components';
import { authService } from '../../service/authService/authService';
import { asyncLocalStorage } from '../../utils';
import { Container, FormContainer } from './Container';

export function LoginPage() {
  const [email, setEmail] = useState('pedro@barretto.com.br');
  const [password, setPassword] = useState('Senha123');
  const navigate = useNavigate();

  const onLogin = async () => {
    const { token } = await authService.login(email, password);
    await asyncLocalStorage.setItem('AuthToken', token);
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
        <Button type='button' onClick={onLogin}>
          Login
        </Button>
      </FormContainer>
    </Container>
  );
}
