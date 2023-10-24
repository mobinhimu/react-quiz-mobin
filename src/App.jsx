import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

import ProtectedRoute from "./ui/ProtectedRoute";
import Spinner from "./ui/Spinner";

// without splitting

// import Home from "./pages/Home";
// import AppLayout from "./ui/AppLayout";
// import Quiz from "./pages/Quiz";
// import Result from "./pages/Result";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";

// with splitting

const Home = lazy(() => import("./pages/Home"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Result = lazy(() => import("./pages/Result"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: 0,
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to="videos" replace />} />
              <Route path="/videos" element={<Home />} />

              <Route
                path="/quiz/:youtubeId"
                element={
                  <ProtectedRoute>
                    <Quiz />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/result/:youtubeId"
                element={
                  <ProtectedRoute>
                    <Result />
                  </ProtectedRoute>
                }
              />

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 5000,
          style: {
            background: "--bodyBackground",
            color: "--fontPrimary",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
