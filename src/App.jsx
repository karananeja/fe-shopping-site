import { ConfigProvider } from 'antd';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import router from './router';
import { queryClient } from './services/query-client';
import { theme } from './utils/constants/theme';

const App = () => {
  return (
    <RecoilRoot>
      <ConfigProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </QueryClientProvider>
      </ConfigProvider>
    </RecoilRoot>
  );
};

export default App;
