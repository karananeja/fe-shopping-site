import React from 'react';
import './App.scss';
import Router from './routes/router';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ConfigProvider } from 'antd';
import { theme } from './utils/constants/theme';
import { queryClient } from './infrastructure/network/queryClient';

const App = () => {
  return (
    <RecoilRoot>
      <ConfigProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </QueryClientProvider>
      </ConfigProvider>
    </RecoilRoot>
  );
};

export default App;
