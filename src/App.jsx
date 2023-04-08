import React from 'react';
import './App.scss';
import Router from './routes/router';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from 'antd';
import { theme } from './utils/constants/theme';

const App = () => {
  return (
    <RecoilRoot>
      <ConfigProvider theme={theme}>
        <RouterProvider router={Router} />
      </ConfigProvider>
    </RecoilRoot>
  );
};

export default App;
