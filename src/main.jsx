import { StrictMode } from "react";
import "./index.css";
import router from "./router/router";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./components/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes (instant load from cache)
      gcTime: 1000 * 60 * 60, // Keep in memory for 1 hour
      refetchOnWindowFocus: false, // Prevent skeleton re-renders on window focus
      refetchOnMount: false, // Use cached data on component remount
    },
  },
});
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  // <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <RouterProvider router={router} />
          </GoogleOAuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  // </StrictMode>
);
