import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Title } from '../../components';
import { RegisterDto } from '../../interfaces';
import { authService } from '../../service';
import { getRegisterErrorMessage } from '../../utils';
import { Container, FormContainer } from './Container';

export function RegisterPage() {
  const navigate = useNavigate();

  const [state, setState] = useState<RegisterDto>({
    email: '',
    lastName: '',
    name: '',
    password: '',
  });
  const [error, setError] = useState('');

  const onRegister = async () => {
    const res = await authService.register(state);

    if (res.error) {
      const errorMsg = getRegisterErrorMessage(res.error);
      setError(errorMsg);
      return;
    }

    setError('');
    navigate('/');
  };

  return (
    <Container>
      <FormContainer>
        <Title>Criar conta</Title>
        <TextInput
          style={{ marginBottom: '1.2rem' }}
          type='text'
          value={state.name}
          placeholder='Nome'
          onChange={(event) => setState({ ...state, name: event.target.value })}
        />
        <TextInput
          style={{ marginBottom: '1.2rem' }}
          type='text'
          value={state.lastName}
          placeholder='Sobrenome'
          onChange={(event) =>
            setState({ ...state, lastName: event.target.value })
          }
        />
        <TextInput
          style={{ marginBottom: '1.2rem' }}
          type='text'
          value={state.email}
          placeholder='Email'
          onChange={(event) =>
            setState({ ...state, email: event.target.value })
          }
        />
        <TextInput
          style={{ marginBottom: '1.2rem' }}
          type='text'
          value={state.password}
          placeholder='Senha'
          onChange={(event) =>
            setState({ ...state, password: event.target.value })
          }
        />
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <Button type='button' onClick={onRegister}>
          Cadastrar
        </Button>
      </FormContainer>
    </Container>
  );
}
