/* eslint-disable react/no-children-prop */
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GoalsPage, HomePage, LoginPage } from '../pages';

export function ZoeRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/metas' element={<GoalsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
