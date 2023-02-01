import React, {useEffect, useState} from 'react';

import {
    StyledProductsContainer,
    StyledWrap,
} from './ProductsStyled';
import {getProducts} from '../../../services/api';
import ProductCard from "../../ProductCard/ProductCard/ProductCard";

const Products = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts().then((products) => {
            setProduct(products);
        })
    }, []);

    return (
        <StyledWrap>
            <StyledProductsContainer>
                {products &&
                    products.map((product, index) => {
                            return <ProductCard key={index} product={product}/>
                        })
                }
            </StyledProductsContainer>
        </StyledWrap>
    )
}

export default Products;