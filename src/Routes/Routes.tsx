import React, { ReactNode } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GoalsPage, HomePage, LoginPage, RegisterPage } from '../pages';

interface Props {
  children: ReactNode;
}

export function ZoeRoutes({ children }: Props) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/metas' element={<GoalsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
