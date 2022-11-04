/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Buttons/Button';
import { Title } from '../Titles/Title';
import { Container } from './Container';

export function NavBar() {
  const btnStyle = { color: 'white', textDecoration: 'none' };
  const location = useLocation();

  const logOut = () => {
    if (location.pathname !== '/login') localStorage.removeItem('AuthToken');
  };

  return (
    <Container>
      <Title>Zoe</Title>
      <Button onClick={logOut}>
        <Link
          style={{ ...btnStyle }}
          to={location.pathname === '/' ? '/login' : '/'}
        >
          {location.pathname === '/login'
            ? 'Home'
            : localStorage.getItem('AuthToken')
            ? 'Sair'
            : 'Entrar'}
        </Link>
      </Button>
    </Container>
  );
}
