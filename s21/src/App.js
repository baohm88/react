import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
