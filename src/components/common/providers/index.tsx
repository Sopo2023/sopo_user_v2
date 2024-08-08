import GlobalStyles from "src/styles/global";
import Router from "../../routers/index";
import PageTemplate from "../pageTemplate";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";
import AuthCheck from "../HOF/authcheck";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
      <AuthCheck>
        <PageTemplate>
          <Router />
        </PageTemplate>
        </AuthCheck>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default Provider;
