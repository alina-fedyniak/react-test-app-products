import { Route, Routes } from 'react-router-dom';
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductContentPage from "../pages/ProductContentPage/ProductContentPage";

export const RouteNav = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProductsPage/>
                }
            />
            <Route
                path="/product/:id"
                element={
                    <ProductContentPage/>
                }
            />
        </Routes>
    );
};