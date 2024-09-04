import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
