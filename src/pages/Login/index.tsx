import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../service/authService/authService';

export function LoginPage() {
  const [email, setEmail] = useState('pedro@barretto.com.br');
  const [password, setPassword] = useState('Senha123');
  const navigate = useNavigate();

  const onLogin = async () => {
    const { token } = await authService.login(email, password);
    localStorage.setItem('AuthToken', token);
    navigate('/metas');
  };

  return (
    <>
      <input
        type='text'
        value={email}
        placeholder='Email'
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type='text'
        value={password}
        placeholder='Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='button' onClick={onLogin}>
        Login
      </button>
    </>
  );
}
