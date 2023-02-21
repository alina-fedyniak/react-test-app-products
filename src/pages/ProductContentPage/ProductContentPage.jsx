import React from 'react';
import ProductContent from "../../components/ProductContent/ProductContent";
import products from "../../components/Products/Products";

const ProductContentPage = () => {

    return (
        <>
           <ProductContent product={products}/>
        </>
    )
}

export default ProductContentPage;