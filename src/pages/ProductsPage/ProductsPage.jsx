import React from 'react';

import {
    StyledWrap,
} from './ProductsPageStyled';
import Products from "../../components/Products/Products/Products";


const ProductsPage = () => {

    return (
        <StyledWrap>
           <Products/>
        </StyledWrap>
    )
}

export default ProductsPage;