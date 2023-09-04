import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';

export const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} exact />;
        })}
      {publicRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} exact />;
      })}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};
