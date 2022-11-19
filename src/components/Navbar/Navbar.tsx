/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Buttons/Button';
import { Title } from '../Titles/Title';
import { Container } from './Container';

export function NavBar() {
  const [token, setToken] = useState('undefined');
  const [path, setPath] = useState('');

  const btnStyle = { color: 'white', textDecoration: 'none' };
  const location = useLocation();

  const logOut = () => {
    if (location.pathname !== '/login') localStorage.removeItem('AuthToken');
  };

  useEffect(() => {
    setToken(localStorage.getItem('AuthToken') || 'undefined');
    setPath(location.pathname);
  }, []);

  useEffect(() => {
    setPath(location.pathname);
    setToken(localStorage.getItem('AuthToken') || 'undefined');
  }, [location]);

  return (
    <Container>
      <Title>zoe</Title>
      <div>
        {token === 'undefined' && (
          <Button style={{ marginRight: 10 }}>
            <Link style={{ ...btnStyle }} to={path === '/' ? '/cadastro' : '/'}>
              {path === '/cadastro' ? 'home' : 'cadastrar'}
            </Link>
          </Button>
        )}

        {path !== '/cadastro' && (
          <Button onClick={logOut}>
            <Link style={{ ...btnStyle }} to={path === '/' ? '/login' : '/'}>
              {path === '/login'
                ? 'home'
                : localStorage.getItem('AuthToken')
                ? 'sair'
                : 'entrar'}
            </Link>
          </Button>
        )}
      </div>
    </Container>
  );
}
