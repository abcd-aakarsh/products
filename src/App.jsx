import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
