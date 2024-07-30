import GlobalStyles from "src/styles/global";
import Router from "../../routers/index";
import PageTemplate from "../pageTemplate";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000,
    },
  },
});

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <PageTemplate>
          <Router />
        </PageTemplate>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Provider;
