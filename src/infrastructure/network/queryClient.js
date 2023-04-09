import { QueryClient } from 'react-query';

const defaultQueryConfig = {
  refetchOnWindowFocus: false,
  retry: false,
};

export const queryClient = new QueryClient({
  defaultOptions: { queries: defaultQueryConfig },
});
