import React from 'react';

import {
    StyledWrap,
} from './ProductContentPageStyled';
import ProductContent from "../../components/ProductContent/ProductContent";
import products from "../../components/Products/Products/Products";


const ProductContentPage = () => {

    return (
        <StyledWrap>
           <div>ProductContentPage</div>
           <ProductContent product={products}/>
        </StyledWrap>
    )
}

export default ProductContentPage;