import React from 'react';
import './App.scss';
import Router from './routes/router';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={Router} />
    </RecoilRoot>
  );
};

export default App;
