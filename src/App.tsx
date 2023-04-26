import { Suspense, lazy } from "react";
import { Home, NotFound, initFontAwesome } from "./pages";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Spinner from "./components/Spinner/Spinner";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({});
const Spinner = lazy(() => import("./components/Spinner/Spinner"));
initFontAwesome();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Spinner />}>
        <Toaster position={"top-right"} />
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
